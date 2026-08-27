import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/header/Header";
import Content from "@/components/content/Content";
import { ToastContainer } from "react-toastify";
import MainProvider from "@/components/providers";
import ThemeSwitcher from "@/components/themeSwitcher/ThemeSwitcher";


const poppins = Poppins({
  variable: "--poppins",
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haze Corporation",
  description: "Official page of the Haze Corporation scientific association on the SAMP server Trinity Role Play #1",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${poppins.variable}`} >
          <MainProvider>
          <ThemeSwitcher>
            <ToastContainer position="bottom-right" autoClose={1000} />
          <Header />
          <Content>
            {children}
          </Content>
          </ThemeSwitcher>
        </MainProvider>
      </body>
    </html>
  );
}
