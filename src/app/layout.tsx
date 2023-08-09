import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
