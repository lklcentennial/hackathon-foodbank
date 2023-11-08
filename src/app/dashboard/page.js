import Dontaion from "@/components/Donation";
import DonationList from "@/components/DonationList";
import InventoryGrid from "@/components/InventoryGrid";
import { donations } from "@/components/dummy data/donations.js";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-row overflow-hidden">
      <div className="flex flex-col w-1/2 items-center justify-center bg-amber-400">ChatBox here</div>
      <div className="flex flex-col max-w-screen-lg w-1/2">
        <div className="">
          <DonationList data={donations} />
        </div>
        <InventoryGrid />
      </div>
    </div>
  );
};

export default DashboardPage;
