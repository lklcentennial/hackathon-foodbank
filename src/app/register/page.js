import AutoComplete from "@/components/Autocomplete";
import CenterContainer from "@/components/CenterContainer";
import React from "react";
import searchImg from "@/app/icons/search.png";
import Image from "next/image";
import FadeInOut from "@/components/FadeInOut";
import Link from "next/link";

const RegisterPage = () => {
  const show = true;
  return (
    <CenterContainer>
      <FadeInOut show={show} duration={250}>
        <h1 className="text-7xl m-4">We gotta know where you are!</h1>
      </FadeInOut>
      <FadeInOut show={show} duration={500}>
        <div className="flex my-4">
          <div className="flex flex-row">
            <Link href={"/dashboard"}>
              <div className="p-2 w-16 h-16 bg-amber-400 border-2 border-amber-400 hover:border-gray-900 cursor-pointer transition duration-500">
                <Image src={searchImg.src} alt="" width={512} height={512} />
              </div>
            </Link>
            <AutoComplete />
          </div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1MpTS0uhS8WNsUGAm0S8rce122crYP0lS&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </FadeInOut>
    </CenterContainer>
  );
};

export default RegisterPage;
