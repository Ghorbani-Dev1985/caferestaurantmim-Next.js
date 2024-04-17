import Image from "next/image";
import React from "react";
import DividerImg from "@/Images/Main/title.webp";
const Title = ({ text }) => {
  return (
    <section className="container flex flex-col items-center my-8">
      <h2 className="text-2xl font-extrabold mb-4">{text}</h2>
      <Image alt="ghorbani-dev.ir" src={DividerImg} className="object-fill" />
    </section>
  );
};

export default Title;
