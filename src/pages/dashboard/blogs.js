import BlogsList from '@/Features/Dashboard/Blogs' 
import Http from '@/Services/HttpService';
const Blogs = ({blogsList}) => {
    console.log(blogsList)
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