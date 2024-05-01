import Layout from "@/Containers/Layout";
import MenusFeature from '@/Features/Menus/Menus'
import useTitle from "@/Hooks/useTitle";
const Menus = () => {
    const title = useTitle(" منو ها | کافه رستوران میم")
    return ( 
        <Layout>
            <MenusFeature />
        </Layout>
     );
}
 
export default Menus;