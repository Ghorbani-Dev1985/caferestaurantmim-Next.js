import DashboardFeature from '@/Features/Dashboard/Dashboard' 
import Http from '@/Services/HttpService';
const Dashboard = () => {
    return ( 
       <DashboardFeature />
     );
}
 
export default Dashboard;

// export async function getStaticProps({req , query}) {
//   const { data } = await Http.get('/Blog');
//   return {
//     props: {
//       blogsList: data,
//     },
//   };
// }