
import "@/Styles/globals.css";
import Header from "@/UI/Header";
import PreFooter from "@/UI/PreFooter";
import Footer from "@/UI/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <PreFooter />
        <Footer />
      </body>
    </html>
  );
}
