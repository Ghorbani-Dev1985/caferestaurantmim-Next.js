import DashboardLayout from "@/Containers/DashboardLayout";
import Alert from "@/UI/Alert";
import React from "react";
import ContactUsRow from "./ContactUsRow";
import Table from "@/UI/Table";

const ContactUsList = ({contacts}) => {
    console.log(contacts)
    return ( 
        <DashboardLayout>
        {
            contacts.length ?  <Table>
        <Table.Header>
    <th scope="col" className="py-4.5">
                ردیف
            </th>
            <th scope="col" className="px-6 py-4.5">
               تاریخ
            </th>
            <th scope="col" className="px-6 py-4.5">
               نام و نام خانوادگی
            </th>
            <th scope="col" className="px-6 py-4.5">
               تلفن تماس
            </th>
            <th scope="col" className="px-6 py-4.5">
               متن کامل
            </th>
            <th scope="col" className="px-6 py-4.5">
               وضعیت پاسخ
            </th>
            <th scope="col" className="px-1.5 py-4.5">
                 عملیات
            </th>
    </Table.Header>
       <Table.Body>
        {
            
            contacts.map((contact , index) => (
                
              <React.Fragment key={contact._id}>
                <ContactUsRow contact={contact} index={index}/>
              </React.Fragment>  
            ))
        }
       </Table.Body>
        </Table>:  <Alert alertText="تاکنون پیامی ثبت نگردیده است"/>
        }
        
    </DashboardLayout>
   
     );
}
 
export default ContactUsList;