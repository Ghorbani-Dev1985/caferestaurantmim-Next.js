import DashboardFeature from '@/Features/Dashboard/Dashboard' 
import Http from '@/Services/HttpService';
const Blogs = ({blogsList}) => {
    console.log(blogsList.length)
    return ( 
       <DashboardFeature />
     );
}
 
export default Blogs;

export async function getStaticProps({req , query}) {
  const { data } = await Http.get('/articles');
  return {
    props: {
      blogsList: data,
    },
  };
}