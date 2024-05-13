import ContactUsList from '@/Features/Dashboard/ContactUs'
import Http from '@/Services/HttpService';

export async function getContacts() {
  const { data : contacts } = await Http.get("/contact");
  return contacts;
}

const contactUsList = async () => {
   const contacts = await getContacts()
    return ( 
            <ContactUsList contacts={contacts}/>
     );
}
 
export default contactUsList;
