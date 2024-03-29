import type { Metadata } from "next";
import { Palanquin as FontSans } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["devanagari", 'latin'],
  variable: "--font-sans",
  weight: "400"

});

export const metadata: Metadata = {
  title: "Nike Clone",
  description: "Portfolio application Nike clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
