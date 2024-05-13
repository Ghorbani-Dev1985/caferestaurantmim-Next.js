import BlogsList from '@/Features/Dashboard/Blogs' 
import useTitle from '@/Hooks/useTitle';
import Http from '@/Services/HttpService';
import { useAuth } from 'src/Context/AuthContext';
const Blogs = ({blogsList}) => {
   const title = useTitle("مقاله ها | کافه رستوران میم")
   const { user} = useAuth();
    console.log(user)
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