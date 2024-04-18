import React from "react";
import Link from "next/link";
import Title from "@/UI/Title";

const Menus = () => {
  return (
    <Link href="/Menus">
      <Title text=" منو کافه و رستوران" />
    </Link>
  );
};

export default Menus;
