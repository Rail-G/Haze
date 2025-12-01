import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";

const poppins = Poppins({
  variable: "--poppins",
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haze Corporation",
  description: "Official page of the Haze Corporation scientific association on the SAMP server Trinity Role Play #1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
