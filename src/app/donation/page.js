import CenterContainer from "@/components/CenterContainer";
import DonationManagement from "@/components/DonationManagement";
import Navbar from "@/components/Navbar";
import React from "react";

const DonationPage = () => {
  return (
    <>
      <Navbar />
      <CenterContainer>
        <DonationManagement />
      </CenterContainer>
    </>
  );
};

export default DonationPage;
