import ContactUsList from '@/Features/Dashboard/ContactUs'
import Http from '@/Services/HttpService';
const contactUs = ({contacts}) => {
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