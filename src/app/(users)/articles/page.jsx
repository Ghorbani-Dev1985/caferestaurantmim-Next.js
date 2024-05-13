import BlogsFeature from '@/Features/Blogs/Blogs'
import { getBlogs } from "../page";
export const metadata = {
    title: "مقاله ها | کافه رستوران میم",
    description: "مقاله های کافه رستوران میم"
   }
const Blogs = async() => {
    const blogs = await getBlogs();
    return <BlogsFeature blogs={blogs}/>
}
 
export default Blogs;
