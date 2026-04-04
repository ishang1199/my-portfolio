import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Ishan | Full Stack Developer",
  description:
    "Portfolio of Ishan - Full Stack Developer focused on web development, DevOps, and AI/ML projects. Explore my projects, skills, experience, and contact information.",
  keywords: [
    "Ishan",
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Engineer",
    "AI ML Engineer",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "Cloud Computing",
    "Web Development",
    "Machine Learning",
    "GitHub Portfolio",
  ],
  generator: "ishang1199.github.io",
  openGraph: {
    title: "Ishan | Full Stack Developer",
    description:
      "Explore Ishan's portfolio showcasing full stack, DevOps, and AI/ML projects.",
    url: "https://ishang1199.github.io",
    siteName: "Ishan Portfolio",
    images: [
      {
        url: "/ishan.png",
        width: 1200,
        height: 630,
        alt: "Ishan Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan | Full Stack Developer",
    description:
      "Portfolio of Ishan - Full Stack Developer focused on software engineering, DevOps, and AI/ML.",
    images: ["/ishan.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://ishang1199.github.io"),
  alternates: {
    canonical: "https://ishang1199.github.io",
  },
  authors: [{ name: "Ishan", url: "https://ishang1199.github.io" }],
  publisher: "Ishan",
}

export const viewport: Viewport = {
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}