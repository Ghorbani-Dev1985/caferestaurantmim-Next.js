import BlogsList from '@/Features/Dashboard/Blogs' 
import Http from '@/Services/HttpService';

export async function getBlogs() {
  const { data : blogs } = await Http.get("/articles");
  return blogs;
}
const Blogs = async() => {
   const blogs = await getBlogs();
    return ( 
       <BlogsList blogsList={blogs}/>
     );
}
 
export default Blogs;

