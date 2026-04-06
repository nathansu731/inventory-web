const fallbackSiteUrl = "https://arkforecasting.com.au";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl
).replace(/\/+$/, "");

export const absoluteUrl = (path = "/") => {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};
