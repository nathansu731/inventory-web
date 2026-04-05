type DataLayerEvent = {
  event: string;
  [key: string]: string | number | boolean | undefined;
};

type LeadType = "trial" | "demo";

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

const isBrowser = () => typeof window !== "undefined";

export const pushToDataLayer = (payload: DataLayerEvent) => {
  if (!isBrowser()) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
};

export const trackEvent = (
  event: string,
  params: Record<string, string | number | boolean | undefined> = {},
) => {
  pushToDataLayer({
    event,
    ...params,
  });
};

export const trackPageView = (pagePath: string) => {
  trackEvent("page_view", {
    page_path: pagePath,
  });
};

export const trackLeadSubmit = (leadType: LeadType) => {
  trackEvent("generate_lead", {
    lead_type: leadType,
  });
};

