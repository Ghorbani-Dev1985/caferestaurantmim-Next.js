"use client"
import "@/Styles/globals.css";
import Header from "@/UI/Header";
import PreFooter from "@/UI/PreFooter";
import Footer from "@/UI/Footer";
import {ShabnamFD} from '../../Constants/LocalFonts'
import {Shabnam} from '../../Constants/LocalFonts'
import AuthProvider from "src/Context/AuthContext";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${ShabnamFD.variable} ${Shabnam.variable} font-sans`}>
      <head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />
       <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
          `,
        }}
      />
      </head>
      <body>
        <AuthProvider>
        <NextUIProvider>
        <Toaster />
        <Header />
        {children}
        <PreFooter />
        <Footer />
        </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
