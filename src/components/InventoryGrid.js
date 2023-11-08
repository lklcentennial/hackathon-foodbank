import Image from "next/image";
import React from "react";
import indianImg from "@/app/icons/louis-hansel.jpg";
import eaImg from "@/app/icons/bon-vivant.jpg"

const InventoryGrid = () => {
  return (
    <div className="m-4 w-full bg-gray-200">
      <h1 className="text-2xl m-4">Recent items</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-center border-2 border-gray-900 bg-gray-300 w-fit m-4">
          <div className="m-2 border-2 border-gray-900">
            <Image
              src={indianImg.src}
              alt=""
              height={512 / 2}
              width={512 / 2}
            />
          </div>
          <div className="text-xl m-2">Random Item</div>
          <div className="p-4 m-2 cursor-pointer text-xl bg-amber-400 border-2 border-amber-400 transition duration-500 hover:border-gray-900">
            Inspect
          </div>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-900 bg-gray-300 w-fit m-4">
          <div className="m-2 border-2 border-gray-900">
            <Image
              src={eaImg.src}
              alt=""
              height={512 / 2}
              width={512 / 2}
            />
          </div>
          <div className="text-xl m-2">Random Item</div>
          <div className="p-4 m-2 cursor-pointer text-xl bg-amber-400 border-2 border-amber-400 transition duration-500 hover:border-gray-900">
            Inspect
          </div>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-900 bg-gray-300 w-fit m-4">
          <div className="m-2 border-2 border-gray-900">
            <Image
              src={indianImg.src}
              alt=""
              height={512 / 2}
              width={512 / 2}
            />
          </div>
          <div className="text-xl m-2">Random Item</div>
          <div className="p-4 m-2 cursor-pointer text-xl bg-amber-400 border-2 border-amber-400 transition duration-500 hover:border-gray-900">
            Inspect
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryGrid;
