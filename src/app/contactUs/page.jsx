'use client';
import ContactUsFeature from '@/Features/ContactUs/ContactUs'
import SEO from "src/Common/SEO";
const ContactUs = () => {
    return ( 
          <>
           <SEO title=" ارتباط با ما | کافه رستوران میم" desc="کافه و رستـوران میم میم یکی از کافه و رستوران رشت شما را به صرف غذاهای خاص دعوت می کند. ما در میم بر لذت بردن از مزه ها در فضایی که لحظه های به یاد ماندنی می سازد تاکید داریم و از این رو نام میم را که لذت میل کردن، نوشیدن و زندگی [&hellip;]" />
          <ContactUsFeature />
          </>
     );
}
 
export default ContactUs;