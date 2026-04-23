import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anupam Kumar — Full Stack Developer",
  description: "MERN Stack Developer with 4 years of experience building scalable web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
