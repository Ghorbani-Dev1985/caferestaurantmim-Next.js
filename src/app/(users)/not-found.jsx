import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return ( 
        <section className="w-full h-screen bg-gradient-to-t from-primary-500 to-primary-50">
            <div className="container h-screen flex flex-col items-center justify-center">
            <Image
              width="600"
              height="600"
              layout="intrinsic"
              placeholder="blur"
              blurDataURL="/NotFound/NotFound.svg"
              alt="ghorbani-dev.ir"
              src="/NotFound/NotFound.svg"
              className="object-fill rounded-none"
            />
        <h2 className="font-extrabold md:text-2xl my-6">چنین صفحه ای یافت نشد</h2>
      <Link legacyBehavior href="/" replace >  
      <span className="bg-primary hover:bg-primary-500 text-white border border-white font-extrabold p-2.5 rounded-xl cursor-pointer transition-colors"> بازگشت به صفحه اصلی</span>
      </Link>
            </div>
        </section>
     );
}
 
export default NotFound;