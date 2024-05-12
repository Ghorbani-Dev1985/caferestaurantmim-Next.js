import Image from "next/image";
import React from "react";
const Title = ({ text }) => {
  return (
    <section className="container flex flex-col items-center my-8">
      <h2 className="text-2xl font-extrabold mb-4">{text}</h2>
      <Image alt="ghorbani-dev.ir" placeholder="blur" blurDataURL="/Main/title.webp" src="/Main/title.webp" width={110} height={25}/>
    </section>
  );
};

export default Title;
