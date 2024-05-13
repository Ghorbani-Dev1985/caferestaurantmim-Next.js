import BlogsList from '@/Features/Dashboard/Blogs' 
import Http from '@/Services/HttpService';

export async function getBlogs() {
  const { data : blogs } = await Http.get("/articles");
  return blogs;
}
const Blogs = async() => {
   const blogs = await getBlogs();
  //  const router = useRouter();
  //  const { user} = useAuth();
  //  useEffect(() => {
  //    if(!user) router.push("login")
  // },[])
    return ( 
       <BlogsList blogsList={blogs}/>
     );
}
 
export default Blogs;

