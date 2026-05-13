import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plebi — quick polls, shared instantly",
  description:
    "Create a poll in seconds. Share a link. Watch results come in live.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-dvh">
        {children}
      </body>
    </html>
  );
}
