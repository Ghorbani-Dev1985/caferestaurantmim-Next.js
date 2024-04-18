import Title from "@/UI/Title";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import Image from 'next/image'
const Blog = () => {
    return ( 
        <section className='container my-8'>
        <div className='flex flex-col items-center gap-6'>
           <Title text={`f`}/>
           <Image
            width={512}
            height={512}
            alt="ghorbani-dev.ir"
            src={`/Blogs/`}
            isZoomed
            className="object-fill rounded-xl max-w-full"
          />
          <div className='flex-center gap-3 max-w-lg'>
            <div className='flex-center gap-1'>
              <HiOutlineCalendar /> 
            </div>
            <div className='flex-center gap-1'>
            <HiOutlineClock />
            </div>
          </div>
         
           
        </div>
  
      </section>
     );
}
 
export default Blog;