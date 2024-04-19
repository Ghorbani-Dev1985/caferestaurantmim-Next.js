import Sidebar from "./Sidebar";

const DashboardLayout = ({children}) => {
    return ( 
        <section className='grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
            <Sidebar />
      <div className='col-span-full md:col-auto p-5 overflow-y-auto'>
          <div className='w-full mx-auto min-h-screen bg-primary-50 rounded-[2.5rem] px-8 py-4'>
         
          <div className='flex flex-col gap-y-12'>
        {children}
          </div>
          </div>
      </div>
      </section>  
     );
}
 
export default DashboardLayout;