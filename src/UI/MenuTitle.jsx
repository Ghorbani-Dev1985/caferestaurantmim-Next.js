import React from "react";

export const MenuTitle = ({ id, title }) => {
  return (
    <>
      <div id={id} className="flex flex-col gap-y-2 my-12">
        <h2 className="font-extrabold text-2xl">{title}</h2>
        <p className="flex gap-x-1">
          <span className="block w-28 h-1 rounded-full bg-primary"></span>
          <span className="block size-1 rounded-full bg-primary"></span>
          <span className="block size-1 rounded-full bg-primary"></span>
          <span className="block size-1 rounded-full bg-primary"></span>
        </p>
      </div>
    </>
  );
};
