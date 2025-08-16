import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/global.css";
import DasboardLayout from "@/components/dashboard/layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { ReduxProvider } from "@/providers/redux-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WatMart",
  description: "Your One-Stop Shop for Electric & Electronic Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider>
            <DasboardLayout>{children}</DasboardLayout>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
