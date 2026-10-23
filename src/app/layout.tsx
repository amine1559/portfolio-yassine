import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { content } from "@/data/portfolio";
import { getMetadataBase, getSiteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import { hasText } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: content.metaTitle,
    template: `%s — ${content.profile.fullName}`,
  },
  description: content.metaDescription,
  keywords: content.keywords,
  applicationName: content.siteName,
  authors: [{ name: content.profile.fullName }],
  creator: content.profile.fullName,
  alternates: {
    canonical: "/",
    languages: { fr: "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/",
    siteName: content.siteName,
    title: content.metaTitle,
    description: content.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: content.metaTitle,
    description: content.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const sameAs = content.profile.socials.map((item) => item.href.trim()).filter(Boolean);
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.profile.fullName,
    jobTitle: content.profile.title,
    description: content.metaDescription,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: content.profile.city,
      addressCountry: "MA",
    },
  };

  if (hasText(content.profile.email)) jsonLd.email = content.profile.email;
  if (hasText(content.profile.phone)) jsonLd.telephone = content.profile.phone;
  if (sameAs.length > 0) jsonLd.sameAs = sameAs;

  return (
    <html lang={content.htmlLang} className={`${manrope.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-bg font-sans text-text antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <a href="#contenu" className="skip-link">
          {content.a11y.skip}
        </a>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
