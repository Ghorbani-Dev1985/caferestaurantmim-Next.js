import Layout from "@/Containers/Layout";
import ContactUsFeature from '@/Features/ContactUs/ContactUs'
import useTitle from "@/Hooks/useTitle";
const ContactUs = () => {
    const title = useTitle(" ارتباط با ما | کافه رستوران میم")
    return ( 
        <Layout>
            <ContactUsFeature />
        </Layout>
     );
}
 
export default ContactUs;