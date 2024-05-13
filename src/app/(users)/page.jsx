import Menus from "@/Features/Home/Menus";
import QuickAccess from "@/Features/Home/QuickAccess";
import Slider from "@/UI/Slider";
import AboutUS from "@/Features/Home/AboutUS";
import BlogsList from "@/Features/Home/BlogsList";
import ImageGallery from "@/Features/Home/ImageGallery";
import Http from "@/Services/HttpService";
import { AboutUsItems } from "./aboutUs/page";

export const metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}

export async function getBlogs() {
  const { data } = await Http.get("/articles");
  const filteredBlog = data.filter((blog) => blog.publish === true);
  return filteredBlog;
}

const HomePage = async () => {
  const blogs = await getBlogs();
  return (
    <>
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
    </>
  );
};

export default HomePage;
