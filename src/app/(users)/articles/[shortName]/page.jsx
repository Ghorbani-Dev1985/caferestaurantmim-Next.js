import BlogDetails from '@/Features/Blog/Blog'
import Http from "@/Services/HttpService";
import SEO from "src/Common/SEO";
import {notFound} from 'next/navigation';
async function getOneBlog(shortName){
  const { data: blog } = await Http.get(`/articles/${shortName}`);
  return blog
}

const Blog = async ({params}) => {
  const blog = await getOneBlog(params.shortName)
  if(!blog.title) return notFound();
    return ( 
        <>
        <SEO title={`${blog.title} | کافه رستوران میم `} desc={`${blog.title}`}/>
            <BlogDetails blog={blog}/>
        </>
     );
}
 
export default Blog;
