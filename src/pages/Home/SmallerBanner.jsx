import React from "react";
import AirPodsMax from "../../assets/images/AirPodsMax.png";
import PlayStation from "../../assets/images/PlayStation.png";
import MacBook from "../../assets/images/MacBook.png";
import VisionPro from "../../assets/images/VisionPro.png";
import Card from "../../components/cards/CardBanner.jsx";
import AirPodsMaxScreenLg from "../../assets/images/AirPodsMaxScreenLg.png";
import PlayStationScreenLg from "../../assets/images/PlayStationScreenLg.png";
import MacBookScreenLg from "../../assets/images/MacBookScreenLg.png";
import VisionProScreenLg from "../../assets/images/VisionProScreenLg.png";

const SmallerBanner = () => {
  return (
    <>
      {/* max-lg  */}
      <div className="Banners flex-col justify-center items-center lg:hidden">
        {/* AirPod  */}
        <Card
          colorBg="bg-gray-200"
          linkImage={AirPodsMax}
          colorText="text-black"
          contentLine1="Apple AirPods "
          contentLine2="Max"
          fontcontentLine1="font-light"
          fontcontentLine2="font-medium"
          content2="Computational audio. Listen, it's powerful"
          gapLine="2"
        />
        {/* VisionPro  */}
        <Card
          colorBg="bg-neutral-700"
          linkImage={VisionPro}
          colorText="text-white"
          contentLine1="Apple Vision "
          contentLine2="Pro"
          fontcontentLine1="font-light"
          fontcontentLine2="font-medium"
          content2="An immersive way to experience entertainment"
          gapLine="2"
        />
        {/* PlayStation  */}
        <Card
          colorBg="bg-white"
          linkImage={PlayStation}
          colorText="text-black"
          contentLine1="Playstation "
          contentLine2="5"
          fontcontentLine1="font-light"
          fontcontentLine2="font-medium"
          content2="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
          gapLine="2"
        />
        {/* MacBook  */}
        <Card
          colorBg="bg-gray-200"
          linkImage={MacBook}
          colorText="text-black"
          contentLine1="MacBook "
          contentLine2="Air"
          fontcontentLine2="font-light"
          fontcontentLine1="font-medium"
          content2="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
          gapLine="4"
          isButton="true"
        />
      </div>
      {/* lg  */}
      <div className=" flex w-full max-lg:hidden">
        {/* left banner  */}
        <div className=" flex-1 justify-center items-center">
          {/* playstation  */}
          <Card
            colorBg="bg-white"
            linkImage={PlayStationScreenLg}
            colorText="text-black"
            contentLine1="Playstation "
            contentLine2="5"
            fontcontentLine1="font-medium"
            fontcontentLine2="font-medium"
            content2="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
            gapLine="4"
            textContentLineSize="text-[49px]"
            textLineHeight="leading-10"
            contentPadding="pr-12"
          />
          {/* AirPod & VisionPro  */}
          <div className=" flex">
            {/* airpod  */}
            <div className=" flex flex-1 overflow-hidden">
              <Card
                colorBg="bg-gray-200"
                linkImage={AirPodsMaxScreenLg}
                colorText="text-black"
                contentLine1="Apple AirPods "
                contentLine2="Max"
                fontcontentLine1="font-light"
                fontcontentLine2="font-medium"
                content2="Computational audio. Listen, it's powerful"
                gapLine="2"
                widthImageVsContent="w-12"
                textContentLineSize="text-[29px]"
                textLineHeight="leading-10"
                contentPadding="pr-12"
              />
            </div>
            {/* visionpro  */}
            <div className=" flex flex-1 overflow-hidden">
              <Card
                colorBg="bg-neutral-700"
                linkImage={VisionProScreenLg}
                colorText="text-white"
                contentLine1="Apple Vision "
                contentLine2="Pro"
                fontcontentLine1="font-light"
                fontcontentLine2="font-medium"
                content2="An immersive way to experience entertainment"
                gapLine="2"
                widthImageVsContent="w-4"
                textContentLineSize="text-[29px]"
                textLineHeight="leading-10"
                contentPadding="pr-12"
              />
            </div>
          </div>
        </div>
        {/* big banner  */}
        {/* Macbook  */}
        <div className=" flex flex-1 justify-center items-center">
          <Card
            colorBg="bg-gray-200"
            linkImage={MacBookScreenLg}
            colorText="text-black"
            contentLine1="MacBook "
            contentLine2="Air"
            fontcontentLine2="font-medium"
            fontcontentLine1="font-thin"
            content2="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
            gapLine="12"
            widthImageVsContent="w-3"
            textContentLineSize="text-[64px]"
            textLineHeight="leading-[56px]"
            contentFirst={true}
            contentPadding="pl-14"
          />
        </div>
      </div>
    </>
  );
};

export default SmallerBanner;
