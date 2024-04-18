import Menus from "@/Features/Home/Menus";
import QuickAccess from "@/Features/Home/QuickAccess";
import Slider from "@/UI/Slider";
import AboutUS from '@/Features/Home/AboutUS'
import BlogsList from "@/Features/Home/BlogsList";
import ImageGallery from "@/Features/Home/ImageGallery";
import { AboutUsItems } from "./AboutUs";
import Layout from "@/Containers/Layout";
const HomePage = () => {
    return (
        <Layout>
        <main className='min-h-screen'>
        <Slider />
        <section className='container'>
         <QuickAccess />
         <Menus />
         <AboutUsItems />
         <BlogsList />
        </section>
        <AboutUS />
         <ImageGallery />
        </main>
        </Layout>
     );
}
 
export default HomePage;