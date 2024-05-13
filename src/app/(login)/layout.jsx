"use client"
import "@/Styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import AuthProvider from "src/Context/AuthContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
        <NextUIProvider>
        <Toaster />
        {children}
        </NextUIProvider>
      </AuthProvider>
        </body>
    </html>
  )
}
