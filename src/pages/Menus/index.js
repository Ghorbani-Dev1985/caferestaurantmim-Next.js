import Layout from "@/Containers/Layout";
import MenusFeature from '@/Features/Menus/Menus'
import SEO from "src/Common/SEO";
const Menus = () => {
    return ( 
        <>
        <SEO title="منو ها | کافه رستوران میم" desc="منوی کافه و رستوران میم"/>
        <Layout>
            <MenusFeature />
        </Layout>
        </>
     );
}
 
export default Menus;