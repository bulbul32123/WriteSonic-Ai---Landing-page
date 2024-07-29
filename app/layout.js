// 'use client'
import { Poppins } from "next/font/google";
import "./globals.css";
// import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({ subsets: ["latin"], weight: ['200', '300', '400', '500', '700'] });

export const metadata = {
  title: "Writesonic",
  description: `Writesonic is an AI-powered writer that helps you generate content for landing pages, blogs, emails, and more. The platform’s landing page copy generator will write copy in 25+ languages, create catchy headlines, and craft high-converting CTA copy.
The platform can also generate content based on your audience’s pain points. Moreover, Writesonic helps you create product descriptions, ideal for eCommerce sites.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className+ ' 2xl:pl-40 2xl:pr-40'}>
        {/* <NextUIProvider> */}
          {children}
        {/* </NextUIProvider> */}
      </body>
    </html>
  );
}
