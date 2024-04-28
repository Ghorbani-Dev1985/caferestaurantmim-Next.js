import DashboardLayout from "@/Containers/DashboardLayout";
import Table from "@/UI/Table";
import React from "react";
import BlogsRow from "./BlogsRow";
import Alert from "@/UI/Alert";

const BlogsList = ({blogsList}) => {
    console.log(blogsList)
    return ( 
        <DashboardLayout>
            {
                blogsList.length ?  <Table>
            <Table.Header>
        <th scope="col" className="py-4.5">
                    ردیف
                </th>
                <th scope="col" className="px-6 py-4.5">
                   تصویر
                </th>
                <th scope="col" className="px-6 py-4.5">
                   عنوان
                </th>
                <th scope="col" className="px-6 py-4.5">
                   لینک
                </th>
                <th scope="col" className="px-6 py-4.5">
                   توضیحات
                </th>
                <th scope="col" className="px-6 py-4.5">
                   بدنه
                </th>
                <th scope="col" className="px-6 py-4.5">
                   وضعیت انتشار
                </th>
                <th scope="col" className="px-1.5 py-4.5">
                     عملیات
                </th>
        </Table.Header>
           <Table.Body>
            {
                
                blogsList.map((blog , index) => (
                    
                  <React.Fragment key={blog._id}>
                    <BlogsRow blog={blog} index={index}/>
                  </React.Fragment>  
                ))
            }
           </Table.Body>
            </Table>:  <Alert alertText="تاکنون مقاله ای ثبت نگردیده است"/>
            }
            
        </DashboardLayout>
     );
}
 
export default BlogsList;