import React from "react";
import Image from "next/image";
import indianImg from "@/app/icons/louis-hansel.jpg";
import Link from "next/link";

const Card2 = () => {
  return (
    <div className=" transition duration-500 flex flex-col bg-white justify-center items-center max-w-xs rounded overflow-hidden shadow-lg m-4 border-orange-500 hover:border-orange-700 shadow-md hover:shadow-xl ">
      <div className="m-2">
        <Image
          className="rounded"
          src={indianImg.src}
          alt=""
          height={512 / 2}
          width={512 / 2}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base"></p>
      </div>
      <div className="px-6 py-4">
        <Link href={"/inventory"}>
          <div className="cursor-pointer bg-orange-500 text-white py-4 px-8 rounded hover:bg-orange-700 hover:text-white transition duration-300">
            Inspect
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
