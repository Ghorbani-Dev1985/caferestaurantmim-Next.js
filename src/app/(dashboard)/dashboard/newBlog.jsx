import DashboardLayout from "@/Containers/DashboardLayout";
import NewBlogFeature from '@/Features/Blog/NewBlog'
import useTitle from "@/Hooks/useTitle";
const NewBlog = () => {
    const title = useTitle("افزودن مقاله | کافه رستوران میم ")
    return ( 
            <NewBlogFeature />
     );
}
 
export default NewBlog;
