import React from "react";
import Image from "next/image";
import dangerImg from "@/app/icons/danger.png";

const IPhoneNotification = ({ title, message }) => {
  return (
    <div className="flex rounded-xl cursor-pointer transition duration-500 m-4 w-full border-b-4 border-orange-500 hover:border-orange-700 shadow-md hover:shadow-xl overflow-hidden">
      <div className="flex justify-center items-center p-4 bg-black">
        <Image
          className="invert"
          src={dangerImg.src}
          width={64}
          height={64}
          alt=""
        />
      </div>

      <div className="flex flex-col p-4 justify-center w-full">
        <div className="text-gray-900 font-bold text-4xl m-2">{title}</div>
        <p className="text-gray-700 m-2 text-xl">{message}</p>
      </div>
    </div>
  );
};

export default IPhoneNotification;
