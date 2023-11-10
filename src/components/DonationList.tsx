"use client";

import React, { useState, useEffect } from "react";
import Donation from "@/components/Donation";
import Link from "next/link";

const DonationList = ({ data }) => {
  return (
    <div className="m-8">
      {data ? (
        <div>
          <Link href={"/donation"}>
            <h3 className="text-right cursor-pointer hover:underline">
              {"Donations >"}
            </h3>
          </Link>
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
