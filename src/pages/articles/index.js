import Layout from "@/Containers/Layout";
import BlogsFeature from '@/Features/Blogs/Blogs'
import Http from "@/Services/HttpService";
const Blogs = ({blogs}) => {
    return ( 
        <Layout>
            <BlogsFeature blogs={blogs}/>
        </Layout>
     );
}
 
export default Blogs;

export async function getStaticProps() {
    const { data } = await Http.get("/articles");
    return { props: { blogs: data } , revalidate : 30};
  }