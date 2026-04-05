import type React from "react"
import "./globals.css"
import "./custom.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { RouteTracker } from "@/components/analytics/route-tracker"

const inter = Inter({ subsets: ["latin"] })
const gtmId = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  title: "ARK Forecasting - AI-Powered Demand Forecasting & Inventory Optimization",
  description:
    "Transform your inventory management with AI-powered demand forecasting. Reduce stockouts, minimize excess inventory, and maximize profitability.",
  icons: {
    icon: "/fav-ico.png",
    shortcut: "/fav-ico.png",
    apple: "/fav-ico.png",
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      {gtmId ? (
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}
    </head>
    <body className={inter.className}>
    {gtmId ? (
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    ) : null}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <RouteTracker />
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}
