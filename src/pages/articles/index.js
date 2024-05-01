import Layout from "@/Containers/Layout";
import BlogsFeature from '@/Features/Blogs/Blogs'
import useTitle from "@/Hooks/useTitle";
import Http from "@/Services/HttpService";
const Blogs = ({blogs}) => {
    const title = useTitle("مقاله ها | کافه رستوران میم")
    return ( 
        <Layout>
            <BlogsFeature blogs={blogs}/>
        </Layout>
     );
}
 
export default Blogs;

export async function getStaticProps({params}) {
    const { data } = await Http.get("/articles");
    return { props: { blogs: data } , revalidate : 30};
  }