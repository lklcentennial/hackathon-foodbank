import FadeInOut from "@/components/FadeInOut";
import FlexContainer from "@/components/FlexContainer";
import CenterContainer from "@/components/CenterContainer";
import React from "react";
import backgroundImg from "@/app/icons/tile_background.png";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <CenterContainer>
      <div>
        <FadeInOut show={true} duration={250}>
          <h1 className="text-9xl m-2">Find you local FoodBank</h1>
        </FadeInOut>
        {/* <div className="bg-color bg-gray-900 px-4 py-0.5 w-1/2 m-4"></div> */}
        <FadeInOut show={true} duration={500}>
          <h1 className="text-7xl m-4">
            We are here to help!
            <Link href={"/locate"}>
              <button className="mx-2 -mt-2 py-4 px-12 text-2xl bg-amber-400 text-center text-gray-900 transition duration-500 border-2 border-amber-400 hover:border-gray-900">
                Locate nearest foodbank
              </button>
            </Link>
            <Link href={"/landing"}>
              <button className="m-4 py-4 px-12 text-2xl underline text-center text-gray-900 transition duration-500 border-2 border-white hover:border-gray-900">
                I own a foodbank
              </button>
            </Link>
          </h1>
        </FadeInOut>
      </div>
      <FadeInOut show={true} duration={750}>
        <div className="flex flex-row">
          {/* <div className="grayscale">
            <Image
              src={splashImg.src}
              alt=""
              width={1920 / 4.5}
              height={2880 / 4.5}
            />
          </div> */}
          <div className="flex flex-col">
            {/* <button className="m-4 py-4 px-12 text-2xl bg-amber-400 text-center text-gray-900">
              Locate nearest foodbank
            </button> */}
            {/* <button className="m-4 py-4 px-12 text-2xl underline text-center text-gray-900">
              I own a foodbank
            </button> */}
          </div>
        </div>
      </FadeInOut>
    </CenterContainer>
  );
};

export default LandingPage;
