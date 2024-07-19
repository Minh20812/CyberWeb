import React, { useState, useEffect } from "react";
import ButtonTransparent from "../button/ButtonTransparent";

const Card = ({
  colorBg,
  linkImage,
  contentLine1,
  contentLine2,
  colorText,
  content2,
  fontcontentLine1,
  fontcontentLine2,
  gapLine,
  widthImageVsContent,
  textContentLineSize,
  textLineHeight,
  contentPadding,
  contentFirst,
  isButton,
}) => {
  const imageClassName =
    contentLine1 === "Playstation " ? "w-[280px]" : "w-auto";

  return (
    <>
      {/* maxLg  */}
      <div
        className={`self-stretch px-4 py-10 ${colorBg} max-lg:flex-col justify-center items-center gap-6 lg:gap-12 flex lg:hidden `}
      >
        {isButton ? (
          <>
            {/* image  */}
            <img src={linkImage} alt="image" />
            {/* content  */}
            <div
              className={`self-stretch flex-col justify-center items-center gap-4 flex font`}
            >
              <div
                className={`text-center ${colorText} text-[34px] lg:text-[29px] font-inter leading-10`}
              >
                <span className={`${fontcontentLine1}`}>{contentLine1}</span>
                <span className={`${fontcontentLine2}`}>{contentLine2}</span>
              </div>
              {/* content 2  */}
              <div className="text-center text-neutral-400 text-base lg:text-[14px] font-medium font-inter leading-6">
                {content2}
              </div>
              {/* button  */}
              <div>
                <ButtonTransparent
                  name="Shop Now"
                  textColor="text-black"
                  borderColor="border-black"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* image  */}
            <img src={linkImage} alt="image" />
            {/* content  */}
            <div
              className={`self-stretch flex-col justify-center items-center gap-2 flex font`}
            >
              <div
                className={`text-center ${colorText} text-[34px] lg:text-[29px] font-inter leading-10`}
              >
                <span className={`${fontcontentLine1}`}>{contentLine1}</span>
                <span className={`${fontcontentLine2}`}>{contentLine2}</span>
              </div>
              {/* content 2  */}
              <div className="text-center text-neutral-400 text-base lg:text-[14px] font-medium font-inter leading-6">
                {content2}
              </div>
            </div>
          </>
        )}
      </div>
      {/* lg  */}
      <div
        className={`self-stretch ${contentPadding} ${colorBg} flex max-lg:hidden justify-center items-center`}
      >
        {contentFirst ? (
          <>
            {/* content  */}
            <div
              className={`self-stretch  flex-col justify-center gap-4 flex font`}
            >
              <div
                className={`${colorText} ${textContentLineSize} font-inter ${textLineHeight} `}
              >
                <span className={`${fontcontentLine1}`}>{contentLine1}</span>
                <span className={`${fontcontentLine2}`}>{contentLine2}</span>
              </div>
              {/* content 2  */}
              <div className=" text-neutral-400 text-base text-[14px] font-medium font-inter leading-6">
                {content2}
              </div>
              {/* button  */}
              <div>
                <ButtonTransparent
                  name="Shop Now"
                  textColor="text-black"
                  borderColor="border-black"
                />
              </div>
            </div>

            {/* spacing between image and content  */}
            <div className={` ${widthImageVsContent}`}></div>

            {/* image  */}
            <img src={linkImage} alt="image" />
          </>
        ) : (
          <>
            {/* image  */}
            <img src={linkImage} alt="image" className={imageClassName} />

            {/* spacing between image and content  */}
            <div className={` ${widthImageVsContent}`}></div>

            {/* content  */}
            <div
              className={`self-stretch flex-col justify-center gap-${gapLine} flex font`}
            >
              <div
                className={`${colorText} ${textContentLineSize} font-inter leading-10 `}
              >
                <span className={`${fontcontentLine1}`}>{contentLine1}</span>
                <span className={`${fontcontentLine2}`}>{contentLine2}</span>
              </div>
              {/* content 2  */}
              <div className=" text-neutral-400 text-base text-[14px] font-medium font-inter leading-6">
                {content2}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
