import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
    default: "تیتان یدک | قطعات برقی ماشین‌آلات راهسازی",
    template: "%s | تیتان یدک",
  },

  description:
    "تیتان یدک با نزدیک به پنج دهه تجربه، واردکننده و تأمین‌کننده تخصصی قطعات برقی ماشین‌آلات راهسازی برندهای کوماتسو، کاترپیلار، هیتاچی، ولوو، هیوندای، دوسان و سایر برندهای معتبر است.",

  keywords: [
    "تیتان یدک",
    "قطعات ماشین آلات راهسازی",
    "قطعات برقی ماشین آلات راهسازی",
    "لوازم یدکی ماشین آلات سنگین",
    "قطعات برق ماشین آلات سنگین",
    "قطعات کوماتسو",
    "قطعات کاترپیلار",
    "قطعات هیتاچی",
    "قطعات ولوو",
    "قطعات هیوندای",
    "قطعات دوسان",
    "قطعات کوبلکو",
    "قطعات لیبهر",
    "قطعات زوم لاین",
    "واردات قطعات راهسازی",
    "فروش قطعات ماشین آلات سنگین",
  ],

  applicationName: "تیتان یدک",
  creator: "تیتان یدک",
  publisher: "تیتان یدک",

  category: "قطعات ماشین‌آلات راهسازی",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "تیتان یدک",
    title: "تیتان یدک | قطعات برقی ماشین‌آلات راهسازی",
    description:
      "واردات و تأمین تخصصی قطعات برقی ماشین‌آلات راهسازی با نزدیک به پنج دهه تجربه، تضمین اصالت کالا و ارسال به سراسر ایران.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "تیتان یدک؛ تأمین‌کننده قطعات برقی ماشین‌آلات راهسازی",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "تیتان یدک | قطعات برقی ماشین‌آلات راهسازی",
    description:
      "واردات و تأمین تخصصی قطعات برقی ماشین‌آلات راهسازی با نزدیک به پنج دهه تجربه.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.className} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
