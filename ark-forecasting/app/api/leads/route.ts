import {NextResponse} from 'next/server';
import {z} from 'zod';

export const runtime = "nodejs";

const leadSchema = z.object({
  leadType: z.enum(["trial", "demo"]),
  payload: z.record(z.string(), z.string()),
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

const toHtmlRows = (payload: Record<string, string>) =>
  Object.entries(payload)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #ddd;font-weight:600">${key}</td><td style="padding:6px 10px;border:1px solid #ddd">${value || "-"}</td></tr>`,
    )
    .join("");

const loadSesSdk = async () => {
  const sdkModuleName = "@aws-sdk/client-ses";
  return (await import(sdkModuleName)) as {
    SESClient: new (config: {
      credentials: {
        accessKeyId: string;
        secretAccessKey: string;
      };
      region: string;
    }) => {
      send: (command: unknown) => Promise<unknown>;
    };
    SendEmailCommand: new (input: {
      Destination: { ToAddresses: string[] };
      Message: {
        Body: {
          Html: { Charset: string; Data: string };
          Text: { Charset: string; Data: string };
        };
        Subject: { Charset: string; Data: string };
      };
      Source: string;
    }) => unknown;
  };
};

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
  const subject =
    leadType === "trial"
      ? "New Trial Signup Lead - ARK Forecasting"
      : "New Demo Booking Lead - ARK Forecasting";

  const html = `
    <h2>${subject}</h2>
    <table style="border-collapse:collapse;border:1px solid #ddd">${toHtmlRows(
      payload,
    )}</table>
  `;

  let SESClient: Awaited<ReturnType<typeof loadSesSdk>>["SESClient"];
  let SendEmailCommand: Awaited<
    ReturnType<typeof loadSesSdk>
  >["SendEmailCommand"];

  try {
    ({ SESClient, SendEmailCommand } = await loadSesSdk());
  } catch {
    return NextResponse.json(
      {
        error:
          "AWS SDK not installed. Install @aws-sdk/client-ses and redeploy.",
      },
      { status: 500 },
    );
  }

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
              Data: `New ${
                leadType === "trial" ? "trial signup" : "demo booking"
              } lead received.`,
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
