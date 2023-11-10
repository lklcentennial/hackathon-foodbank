"use client";
import Link from "next/link";
import AutoComplete from "@/components/Autocomplete";
import CenterContainer from "@/components/CenterContainer";
import React, { useState } from "react";
import searchImg from "@/app/icons/search.png";
import Image from "next/image";
import FadeInOut from "@/components/FadeInOut";
import imageSrc from "@/app/icons/bon-vivant.jpg";
import Navbar from "@/components/Navbar";

const LocatePage = () => {
  const show = true;
  const [showMap, setShowMap] = useState(true);
  const [showLandscape, setShowLandscape] = useState(false);
  return (
    <>
      <Navbar />
      <CenterContainer>
        <FadeInOut show={show} duration={250}>
          <h1 className="text-2xl lg:text-6xl font-bold mb-6">Find your local FoodBank</h1>
        </FadeInOut>
        <FadeInOut show={show} duration={500}>
          <div className="flex flex-col justify-center items-center my-4">
            <div className="mb-4 flex flex-row">
              <Link
                href="/aboutfb"
                className="p-2 w-16 h-16 rounded bg-orange-500 hover:bg-orange-700 cursor-pointer transition duration-500"
              >
                <Image
                  src={searchImg.src}
                  alt=""
                  width={512}
                  height={512}
                  className="invert"
                />
              </Link>
              <AutoComplete />
            </div>
            <FadeInOut show={showMap} duration={500}>
              <iframe
                className="w-fit lg:w-auto m-2"
                src="https://www.google.com/maps/d/embed?mid=1MpTS0uhS8WNsUGAm0S8rce122crYP0lS&ehbc=2E312F"
                width="640"
                height="480"
              ></iframe>
            </FadeInOut>
            <FadeInOut show={!showMap}>
              <div className="flex">
                <Image src={imageSrc.src} alt="" width={512} height={512} />
                <h1 className="text-6xl font-bold mb-6">
                  Find your local FoodBank
                </h1>
              </div>
            </FadeInOut>
          </div>
        </FadeInOut>
      </CenterContainer>
    </>
  );
};

export default LocatePage;
