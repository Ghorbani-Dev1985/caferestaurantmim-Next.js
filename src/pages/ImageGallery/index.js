import React, { useState } from 'react';
import ImageGalleryUi from '@/UI/ImageGallery'
import data from "@/Data/data.json";
import Image from "next/image";
import Layout from '@/Containers/Layout';
import SEO from 'src/Common/SEO';
const ImageGallery = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const handleClick = (id, href) => {
      setCurrentIndex(id);
      setClickedImg(href);
    };
    return ( 
      <>
      <SEO title="گالری تصاویر | کافه و رستوران میم" desc="گالری تصاویر کافه رستوران میم"/>
        <Layout>
        <ImageGalleryUi clickedImg={clickedImg} setClickedImg={setClickedImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {data.images.map(({ id, href }) => (
          <React.Fragment key={id}>
             <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
               <Image
               width="220"
               height="220"
               alt="ghorbani-dev.ir"
               placeholder='blur'
               blurDataURL={href}
               src={href}
               className="object-fill size-[220px] rounded-lg"
               />
               <div onClick={() => handleClick(id , href)}
           className="absolute max-w-[220px] bottom-0 left-0 right-0 top-0 h-full w-full z-20 rounded-lg overflow-hidden bg-primary bg-fixed opacity-0 transition-all duration-500 ease-linear hover:opacity-40"></div>
               </div>
             </React.Fragment>
           ))}
           </ImageGalleryUi> 
           </Layout>
           </>
     );
}
 
export default ImageGallery;