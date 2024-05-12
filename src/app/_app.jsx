import { NextUIProvider } from "@nextui-org/react";
import "@/Styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "src/Context/AuthContext";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
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
      <AuthProvider>
        <NextUIProvider>
          <Toaster />
          <Component {...pageProps} />
        </NextUIProvider>
      </AuthProvider>
    </>
  );
}
