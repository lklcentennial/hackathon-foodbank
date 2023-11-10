"use client";
import CenterContainer from "@/components/CenterContainer";
import React, { useState } from "react";
import Image from "next/image";
import FadeInOut from "@/components/FadeInOut";
import imageSrc from "@/app/icons/bon-vivant.jpg";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Link from "next/link";

const AboutFb = () => {
  return (
    <>
      <Navbar />
      <CenterContainer>
        <FadeInOut show={true} duration={250}>
          <div className="flex flex-col lg:flex-row">
            <Image
              src={imageSrc.src}
              alt=""
              width={512}
              height={512}
              className="mt-10 lg:m-2 rounded"
            />
            <div>
              <FadeInOut show={true} duration={250 * 2}>
                <h1 className="text-4xl font-bold m-6">
                  Here is what you should know...
                </h1>
              </FadeInOut>
              <FadeInOut show={true} duration={250 * 3}>
                <h2 className="text-2xl m-6">2259 Kingston Rd.</h2>
              </FadeInOut>
              <FadeInOut show={true} duration={250 * 4}>
                <div className="m-2">
                  <Service />
                </div>
              </FadeInOut>
              <div className="cursor-pointer bg-white text-orange-500 py-4 px-8 rounded hover:underline transition duration-300">
                <FadeInOut show={true} duration={250 * 4}>
                  <a target="_blank" href="https://www.google.com/maps/dir/2259+Kingston+Road,+Toronto,+ON/AB+Creations,+159+Kennedy+Rd,+Scarborough,+ON+M1N+3P1/@43.7040125,-79.2551263,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d4ce567da78799:0xf999e312e07ce36a!2m2!1d-79.2512647!2d43.7054804!1m5!1m1!1s0x4ac87b19d1f21df3:0x56ab8ff9b3edd48!2m2!1d-79.2562484!2d43.7044228!3e3?entry=ttu">
                    {"Send Directions to Maps ->"}
                  </a>
                </FadeInOut>
              </div>
            </div>
          </div>
        </FadeInOut>
      </CenterContainer>
    </>
  );
};

export default AboutFb;
