import BlogsFeature from '@/Features/Blogs/Blogs'
import SEO from "src/Common/SEO";
import { getBlogs } from "../page";
const Blogs = async() => {
    const blogs = await getBlogs();
    return (
        <>
        <SEO title="مقاله ها | کافه رستوران میم" desc="مقاله های کافه رستوران میم" />
            <BlogsFeature blogs={blogs}/>
        </> 
     );
}
 
export default Blogs;
