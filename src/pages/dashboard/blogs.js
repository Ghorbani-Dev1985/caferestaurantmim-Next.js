import BlogsList from '@/Features/Dashboard/Blogs' 
import useTitle from '@/Hooks/useTitle';
import Http from '@/Services/HttpService';
const Blogs = ({blogsList}) => {
   const title = useTitle("مقاله ها | کافه رستوران میم")
    return ( 
       <BlogsList blogsList={blogsList}/>
     );
}
 
export default Blogs;

export async function getServerSideProps({req , query}) {
  const { data } = await Http.get('/articles');
  return {
    props: {
      blogsList: data,
    },
  };
}