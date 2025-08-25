import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ATN Soul | Music Producer",
    template: "%s | ATN Soul",
  },
  description: "ATN Soul - Music Producer, Composer & Lyricist from Paris. Discover the work of Ethan Fellous.",
  keywords: ["musique", "événements", "concerts", "artistes", "ATN Soul", "festival"],
  authors: [{ name: "ATN Soul" }],
  creator: "ATN Soul",
  publisher: "ATN Soul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://atnsoul.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png", sizes: "any" },
    ],
    apple: "/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atnsoul.com",
    title: "ATN Soul | Music Producer",
    description: "ATN Soul - Music Producer, Composer & Lyricist from Paris. Discover the work of Ethan Fellous.",
    siteName: "ATN Soul",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ATN Soul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATN Soul | Music Producer",
    description: "ATN Soul - Music Producer, Composer & Lyricist from Paris.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased scrollbar-thin`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
