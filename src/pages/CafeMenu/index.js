import Layout from "@/Containers/Layout";
import CafeMenuFeature from '@/Features/CafeMenu/CafeMenu'
import useTitle from "@/Hooks/useTitle";
const CafeMenu = () => {
    const title = useTitle(" کافه میم | کافه رستوران میم")
    return ( 
        <Layout>
            <CafeMenuFeature />
        </Layout>
     );
}
 
export default CafeMenu;