import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { jetbrainsMono, playfair, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(brand.hubUrl),
  title: {
    default: "Thinkswell Proposal Hub",
    template: "%s · Thinkswell Proposal Hub",
  },
  description:
    "Client proposals from Thinkswell, the Nashville marketing agency for entertainment and hospitality brands.",
  applicationName: "Thinkswell Proposal Hub",
  authors: [{ name: brand.name, url: brand.url }],
  keywords: [
    "Thinkswell",
    "Nashville marketing agency",
    "entertainment marketing",
    "hospitality marketing",
    "proposal",
  ],
  openGraph: {
    type: "website",
    siteName: "Thinkswell Proposal Hub",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#17161a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  url: brand.url,
  email: brand.email,
  description: brand.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.line1,
    addressLocality: brand.address.city,
    addressRegion: brand.address.state,
    postalCode: brand.address.zip,
    addressCountry: "US",
  },
  areaServed: "Nashville, TN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full scroll-pt-32 antialiased md:scroll-pt-24`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
