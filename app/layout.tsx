import type { Metadata, Viewport } from "next";
import "./globals.css";
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f1f0eb" };
export const metadata: Metadata = {
  metadataBase: new URL("https://brockburchett.com"),
  title: "Brock Burchett | Application Engineer",
  description: "Useful web applications, home infrastructure, and field notes from building and measuring real systems.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Brock Burchett | Application Engineer", description: "Applications, networks, and the details in between.", url: "/", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Brock Burchett portfolio" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] }
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
