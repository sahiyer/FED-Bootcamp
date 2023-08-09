import "./globals.css";
import type { Metadata } from "next";
import styles from "./home.module.scss";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
