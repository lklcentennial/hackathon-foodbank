import ChatBox from "@/components/ChatBox";
import Dontaion from "@/components/Donation";
import DonationList from "@/components/DonationList";
import InventoryGrid from "@/components/InventoryGrid";
import Navbar from "@/components/Navbar";
import { donations } from "@/components/dummy data/donations.js";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row max-h-screen">
        {/* <div className="flex flex-col w-1/2 items-center justify-center bg-orange-500">ChatBox here</div> */}
        <div className="flex flex-col w-1/2">
            <h1 className="text-4xl m-6">Announcements</h1>
          <ChatBox />
        </div>
        <div className="flex flex-col max-w-screen-lg w-1/2">
          <div className="">
            <DonationList data={donations} />
          </div>
          <InventoryGrid />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
