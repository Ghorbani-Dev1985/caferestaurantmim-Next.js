import Layout from "@/Containers/Layout";
import BlogsFeature from '@/Features/Blogs/Blogs'
import Http from "@/Services/HttpService";
import SEO from "src/Common/SEO";
const Blogs = ({blogs}) => {
    return (
        <>
        <SEO title="مقاله ها | کافه رستوران میم" desc="مقاله های کافه رستوران میم" />
        <Layout>
            <BlogsFeature blogs={blogs}/>
        </Layout>
        </> 
     );
}
 
export default Blogs;

export async function getStaticProps() {
    const { data } = await Http.get("/articles");
    return { props: { blogs: data } , revalidate : 30};
  }