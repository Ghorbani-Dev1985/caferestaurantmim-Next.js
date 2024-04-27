import DashboardFeature from '@/Features/Dashboard/Dashboard' 
import Http from '@/Services/HttpService';
const Blogs = () => {
    return ( 
       <DashboardFeature />
     );
}
 
export default Blogs;

// export async function getStaticProps({req , query}) {
//   const { data } = await Http.get('/Blog');
//   return {
//     props: {
//       blogsList: data,
//     },
//   };
// }