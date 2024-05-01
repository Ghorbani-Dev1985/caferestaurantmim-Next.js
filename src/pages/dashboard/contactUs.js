import ContactUsList from '@/Features/Dashboard/ContactUs'
import useTitle from '@/Hooks/useTitle';
import Http from '@/Services/HttpService';
const contactUs = ({contacts}) => {
  const title = useTitle(" پیام ها | کافه رستوران میم")
    return ( 
            <ContactUsList contacts={contacts}/>
     );
}
 
export default contactUs;

export async function getServerSideProps({req , query}) {
    const { data } = await Http.get('/contact');
    return {
      props: {
        contacts: data,
      },
    };
  }