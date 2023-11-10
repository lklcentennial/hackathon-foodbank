import Image from "next/image";
import React from "react";
import indianImg from "@/app/icons/louis-hansel.jpg";
import eaImg from "@/app/icons/bon-vivant.jpg";
import Card2 from "./Card2";

const InventoryGrid = () => {
  return (
    <div className="m-4 w-max bg-gray-200 rounded-xl">
      <h1 className="text-2xl m-4">Recent items</h1>
      <div className="flex flex-row">
        <Card2 />
        <Card2 />
        <Card2 />
        {/* <div className="flex flex-col items-center border-2 bg-white w-fit m-4">
          <div className="m-2">
            <Image
              className="rounded"
              src={indianImg.src}
              alt=""
              height={512 / 2}
              width={512 / 2}
            />
          </div>
          <div className="text-xl m-2">Random Item</div>
          <div className="bg-orange-500 text-white py-4 px-8 rounded hover:bg-orange-700 hover:text-white transition duration-300">
            Inspect
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InventoryGrid;
