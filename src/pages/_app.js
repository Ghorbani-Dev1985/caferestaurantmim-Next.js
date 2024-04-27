
import { NextUIProvider } from "@nextui-org/react";
import '@/Styles/globals.css'
import { Toaster } from "react-hot-toast";
import AuthProvider from "src/Context/AuthContext";
export default function App({ Component, pageProps }) {
  return (<AuthProvider><NextUIProvider> <Toaster /><Component {...pageProps} /></NextUIProvider></AuthProvider>)
}