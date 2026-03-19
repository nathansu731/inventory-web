import type React from "react"
import "./globals.css"
import "./custom.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ARK Forecasting - AI-Powered Demand Forecasting & Inventory Optimization",
  description:
    "Transform your inventory management with AI-powered demand forecasting. Reduce stockouts, minimize excess inventory, and maximize profitability.",
  icons: {
    icon: "/ark-logo-black.png",
    shortcut: "/ark-logo-black.png",
    apple: "/ark-logo-black.png",
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}
