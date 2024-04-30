import Title from "@/UI/Title";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import Image from 'next/image'
import ToLocalDateStringShort from "@/Server/Utils/ToLocalDateStringShort";
import DOMPurify from "isomorphic-dompurify";
const Blog = ({blog}) => {
  const {title , cover , createdAt , body} = blog
  const src = `${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${cover}`;
    return ( 
        <section className='container my-8'>
        <div className='flex flex-col items-center gap-6'>
           <Title text={title}/>
           <Image
            width={512}
            height={512}
            alt="ghorbani-dev.ir"
            src={src}
            className="object-fill rounded-xl max-w-full"
          />
          <div className='flex-center gap-3 max-w-lg'>
            <div className='flex-center gap-1'>
              <HiOutlineCalendar /> 
              {ToLocalDateStringShort(createdAt)}
            </div>
            <div className='flex-center gap-1'>
            <HiOutlineClock />
            {createdAt.slice(11,16)}
            </div>
          </div>
          <article
          className="prose prose-xl md:prose-2xl prose-slate prose-p:text-justify prose-headings:text-orange-500 prose-headings:text-2xl prose-headings:md:text-4xl prose-h1:text-3xl md:prose-h3:text-3xl prose-h3:font-extrabold prose-h1:font-extrabold my-16 prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-lg prose-img:hover:scale-105 prose-img:transition-all prose-img:ease-linear prose-img:duration-300"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }}
        ></article>
           
        </div>
        <Title text=""/>
      </section>
     );
}
 
export default Blog;