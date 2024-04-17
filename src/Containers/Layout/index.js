import Footer from "@/UI/Footer";
import Header from "@/UI/Header";
import PreFooter from "@/UI/PreFooter";

const Layout = ({children}) => {
    return ( 
        <>
        <Header />
        {children}
        <PreFooter />
        <Footer />
        </>
     );
}
 
export default Layout;