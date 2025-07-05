import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookieBanner from "@/components/CookieBanner"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grupo RF Construcciones y Servicios | Santiago de Chile",
  description:
    "Empresa de construcciones y servicios en Santiago de Chile. Ofrecemos servicios de alta calidad en construcción, remodelación y diseño de interiores.",
  keywords: [
    "construcción", "remodelación", "diseño de interiores", "Santiago de Chile", "obras civiles", "proyectos residenciales", "proyectos comerciales", "grupo RF"
  ],
  openGraph: {
    title: "Grupo RF Construcciones y Servicios | Santiago de Chile",
    description: "Empresa de construcciones y servicios en Santiago de Chile. Ofrecemos servicios de alta calidad en construcción, remodelación y diseño de interiores.",
    url: "https://gruporf.cl/",
    siteName: "Grupo RF",
    images: [
      {
        url: "/grupo-rf-logo.webp",
        width: 1200,
        height: 630,
        alt: "Grupo RF Logo"
      }
    ],
    locale: "es_CL",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo RF Construcciones y Servicios | Santiago de Chile",
    description: "Empresa de construcciones y servicios en Santiago de Chile. Ofrecemos servicios de alta calidad en construcción, remodelación y diseño de interiores.",
    images: ["/grupo-rf-logo.webp"]
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://gruporf.cl/'),
}

export const viewport = {
  themeColor: '#1e3a8a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"  
          enableSystem 
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
         <CookieBanner />                             
        </ThemeProvider>
        
      </body>
    </html>
  )


}