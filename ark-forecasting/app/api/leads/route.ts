import {NextResponse} from 'next/server';
import {z} from 'zod';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const runtime = "nodejs";

const leadSchema = z.object({
  leadType: z.enum(["demo", "sales", "expert"]),
  payload: z
    .record(z.string(), z.string())
    .refine((payload) => (payload.notes?.length ?? 0) <= 600, {
      message: "Notes must be 600 characters or fewer",
    }),
});

const requiredEnv = [
  "AWS_REGION",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_SES_FROM_EMAIL",
  "LEADS_FORWARD_TO_EMAIL",
] as const;

const missingEnvVars = () =>
  requiredEnv.filter((key) => {
    const value = process.env[key];
    return !value || value.trim().length === 0;
  });

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");

const toHtmlRows = (payload: Record<string, string>) =>
  Object.entries(payload)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #ddd;font-weight:600">${escapeHtml(key)}</td><td style="padding:6px 10px;border:1px solid #ddd">${escapeHtml(value || "-")}</td></tr>`,
    )
    .join("");

const toTextRows = (payload: Record<string, string>) =>
  Object.entries(payload)
    .map(([key, value]) => `${key}: ${value || "-"}`)
    .join("\n");

export async function POST(request: Request) {
  const missing = missingEnvVars();
  if (missing.length > 0) {
    return NextResponse.json(
      {
        error: `Missing required env vars: ${missing.join(", ")}`,
      },
      { status: 500 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid payload",
      },
      { status: 400 },
    );
  }

  const { leadType, payload } = parsed.data;
  const leadLabels = {
    demo: "Demo Booking",
    sales: "Contact Sales",
    expert: "Talk to an Expert",
  } as const;
  const subject = `New ${leadLabels[leadType]} Lead - ARK Forecasting`;

  const html = `
    <h2>${subject}</h2>
    <table style="border-collapse:collapse;border:1px solid #ddd">${toHtmlRows(
      payload,
    )}</table>
  `;

  const sesClient = new SESClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    region: process.env.AWS_REGION!,
  });

  try {
    await sesClient.send(
      new SendEmailCommand({
        Destination: {
          ToAddresses: [process.env.LEADS_FORWARD_TO_EMAIL!],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: html,
            },
            Text: {
              Charset: "UTF-8",
              Data: `${subject}\n\n${toTextRows(payload)}`,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: subject,
          },
        },
        Source: process.env.AWS_SES_FROM_EMAIL!,
      }),
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to forward lead email",
        providerError: String(error),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
