
import "@/Styles/globals.css";
import Header from "@/UI/Header";
import PreFooter from "@/UI/PreFooter";
import Footer from "@/UI/Footer";
import {ShabnamFD} from '../../Constants/LocalFonts'
import {Shabnam} from '../../Constants/LocalFonts'

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${ShabnamFD.variable} ${Shabnam.variable} font-sans`}>
      <body>
        <Header />
        {children}
        <PreFooter />
        <Footer />
      </body>
    </html>
  );
}
