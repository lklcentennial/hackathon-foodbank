"use client";

import React, { useState, useEffect } from "react";
import Donation from "@/components/Donation";

const DonationList = ({ data }) => {
  return (
    <div className="m-8">
      {data ? (
        <div>
          <h3 className="text-right cursor-pointer hover:underline">{"Donations >"}</h3>
          {data.map((item, index) => (
            <Donation key={index} title={item.title} message={item.message} />
          ))}
        </div>
      ) : (
        // <LoadingSkeleton />
        <></>
      )}
    </div>
  );
};

export default DonationList;
