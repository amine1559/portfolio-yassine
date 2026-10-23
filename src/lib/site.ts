const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_SITE_URL;

  try {
    const url = new URL(raw);
    const pathname = url.pathname.replace(/\/$/, "");
    return `${url.origin}${pathname}`;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getMetadataBase() {
  const siteUrl = getSiteUrl();
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return new URL(new URL(siteUrl).origin);
  }
  return new URL(siteUrl);
}

export function assetPath(publicPath: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!publicPath.startsWith("/") || publicPath.startsWith("//")) return publicPath;
  return `${base}${publicPath}`;
}
