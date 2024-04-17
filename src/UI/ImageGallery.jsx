import React from "react";
import LightBoxModal from "@/UI/LightBoxModal";
import Title from "@/UI/Title";
const ImageGallery = ({
  children,
  clickedImg,
  setClickedImg,
  currentIndex,
  setCurrentIndex,
}) => {
  const handelRotationRight = () => {
    const totalLength = ImageItems.images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = ImageItems.images[0].href;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = ImageItems.images.filter((item) => {
      return ImageItems.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].href;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = ImageItems.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = ImageItems.images[totalLength - 1].href;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = ImageItems.images.filter((item) => {
      return ImageItems.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].href;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <Title text="گالری تصاویر" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {children}
      </div>
      {clickedImg && (
        <LightBoxModal
          clickedImg={clickedImg}
          handelRotationLeft={handelRotationLeft}
          setClickedImg={setClickedImg}
          handelRotationRight={handelRotationRight}
        />
      )}
    </>
  );
};

export default ImageGallery;
