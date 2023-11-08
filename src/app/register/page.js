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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92284.78698049988!2d-79.2948247449442!3d43.712635657909864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce566a8fd331%3A0x33b3637f9e77aa75!2sFeed%20Scarborough%20-%20Cliffside%20Food%20Bank!5e0!3m2!1sen!2sca!4v1699446965856!5m2!1sen!2sca"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </FadeInOut>
    </CenterContainer>
  );
};

export default RegisterPage;
