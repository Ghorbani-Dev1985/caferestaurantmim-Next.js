import Layout from "@/Containers/Layout";
import BlogDetails from '@/Features/Blog/Blog'
import useTitle from "@/Hooks/useTitle";
import Http from "@/Services/HttpService";
const Blog = ({blog}) => {
  const title = useTitle(`${blog.title} | کافه رستوران میم  `)
    return ( 
        <Layout>
            <BlogDetails blog={blog}/>
        </Layout>
     );
}
 
export default Blog;


export async function getStaticPaths(){
  const {data} = await Http.get('/articles');
 const paths = data.map((blog) => {
      return {
          params: {shortName: `${blog.shortName}`},
      }
  })
  return {
    paths,
    fallback: true
  }
}
  
  export async function getStaticProps({params}) {
    const { data } = await Http.get(`/articles/${params.shortName}`);
    console.log(data)
    return { props: { blog: data } , revalidate : 30 };
  }