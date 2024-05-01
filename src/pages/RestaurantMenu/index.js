import Layout from '@/Containers/Layout';
import RestaurantMenuFeature from '@/Features/RestaurantMenu/RestaurantMenu'
import useTitle from '@/Hooks/useTitle';
const RestaurantMenu = () => {
    const title = useTitle(" رستوران میم | کافه رستوران میم")
    return (
        <Layout>
            <RestaurantMenuFeature />
        </Layout>
    )
}
 
export default RestaurantMenu;