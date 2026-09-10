import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Aman Sharma | ECE Student & Developer",

  description:
    "Portfolio of Aman Sharma — B.Tech ECE student at IIIT Manipur, developer and problem solver.",

  keywords: [
    "Aman Sharma",
    "IIIT Manipur",
    "ECE",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "DSA",
    "Portfolio",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}