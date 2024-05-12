import Menus from "@/Features/Home/Menus";
import QuickAccess from "@/Features/Home/QuickAccess";
import Slider from "@/UI/Slider";
import AboutUS from "@/Features/Home/AboutUS";
import BlogsList from "@/Features/Home/BlogsList";
import ImageGallery from "@/Features/Home/ImageGallery";
import { AboutUsItems } from "../app/aboutUs/page";
import Layout from "@/Containers/Layout";
import Http from "@/Services/HttpService";
import SEO from "src/Common/SEO";
const HomePage = ({ blogs }) => {
  return (
    <>
      <SEO
        title="کافه و رستوران میم | Cafe Restaurant mim"
        desc="کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
      />
      <Layout>
        <main className="min-h-screen">
          <Slider />
          <section className="container">
            <QuickAccess />
            <Menus />
            <AboutUsItems />
            <BlogsList blogs={blogs} />
          </section>
          <AboutUS />
          <ImageGallery />
        </main>
      </Layout>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const { data } = await Http.get("/articles");
  return { props: { blogs: data }, revalidate: 30 };
}
