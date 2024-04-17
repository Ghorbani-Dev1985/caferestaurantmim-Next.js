
import { NextUIProvider } from "@nextui-org/react";
import '@/Styles/globals.css'
export default function App({ Component, pageProps }) {
  return (<NextUIProvider><Component {...pageProps} /></NextUIProvider>)
}