import Image from "next/image"
import Link from "next/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

const BlogsCard = ({blog}) => {
    console.log(blog)
    const {title , shortName , cover} = blog
    const src = `${process.env.NEXT_PUBLIC_DOMAINAPI_URL}${cover}`;
    return(
        <div className="w-full flex flex-col gap-8 items-center border border-gray-200 rounded-xl p-5">
        <div className="min-h-[279px]">      
        <Image
          width={279}
          height={279}
          alt="ghorbani-dev.ir"
          src={src}     
          className="object-fill rounded-xl"
        />
        </div>
         <h2 className="text-xl line-clamp-1">{title}</h2>
         <Link href={`/articles/${shortName}`} className="flex-center gap-1 bg-primary-300 hover:bg-primary-500 text-primary-800 px-2 py-1 rounded-full transition-colors">مطالعه کنید <HiArrowNarrowLeft /></Link>
      </div>
    )
}

export default BlogsCard