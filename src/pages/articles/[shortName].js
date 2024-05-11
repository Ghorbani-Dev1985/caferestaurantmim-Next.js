import Layout from "@/Containers/Layout";
import BlogDetails from '@/Features/Blog/Blog'
import useTitle from "@/Hooks/useTitle";
import Http from "@/Services/HttpService";
import SEO from "src/Common/SEO";

const Blog = ({blog}) => {
 
    return ( 
        <>
        <SEO title={`${blog.title} | کافه رستوران میم `} desc={`${blog.title}`}/>
        <Layout>
            <BlogDetails blog={blog}/>
        </Layout>
        </>
     );
}
 
export default Blog;


export async function getStaticPaths(){
  const {data} = await Http.get('/articles');
  const filteredBlog = data.filter(blog => blog.publish === true);
 const paths = filteredBlog.map((blog) => {
      return {
          params: {shortName: `${blog.shortName}`},
      }
  })
  return {
    paths,
    fallback: false
  }
}
  
  export async function getStaticProps({params}) {
    const { data } = await Http.get(`/articles/${params.shortName}`);
    return { props: { blog: data } };
  }