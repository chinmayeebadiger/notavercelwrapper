import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "totally-not-vercel",
  description:
    "A cinematic control-room landing page for spinning up append lists and inviting contributors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
