
import { NextUIProvider } from "@nextui-org/react";
import '@/Styles/globals.css'
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (<NextUIProvider> <Toaster /><Component {...pageProps} /></NextUIProvider>)
}