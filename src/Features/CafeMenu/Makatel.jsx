import React from "react";
import { MenuTitle } from "@/UI/MenuTitle";
import data from "@/Data/data.json";
import MenuItemsCard from "@/UI/MenuItemsCard";

const Makatel = () => {
  return (
    <>
      <MenuTitle id="makatel" title="  ماکتل" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.makatel.map(({ id, src, title, subTitle, price }) => (
          <React.Fragment key={id}>
            <MenuItemsCard
              src={src}
              title={title}
              subTitle={subTitle}
              price={price}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Makatel;
