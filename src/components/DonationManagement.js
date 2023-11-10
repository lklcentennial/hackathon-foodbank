import React from "react";
import data from "@/components/dummy data/donationJson.json";

const DonationManagement = () => {
  return (
    <>
      <div className="bg-white container mx-auto flex flex-col p-8 shadow-lg w-screen">
        <h1 className="lg:text-6xl md:text-4xl text-center text-black rounded-lg py-3">
          Donation Management
        </h1>
        <button className="hover:bg-orange-700 mb-6 flex mx-auto text-center text-white items-center justify-center bg-orange-500 p-3 my-2 rounded">
          Donate to others
        </button>
        <div className="overflow-x-auto mx-auto lg:w-2/3">
          <table className="overflow-x-auto w-full border text-center border-gray-300 shadow-lg divide-y divide-gray-200">
            <thead className="bg-gray-100 shadow-lg">
              <tr>
                <th className="px-3 py-4 text-lg">Title</th>
                <th className="px-3 py-4 text-lg">Message</th>
                <th className="px-3 py-4"></th>
                <th className="px-3 py-4"></th>
              </tr>
            </thead>

            <tbody>
              {data.donationDetails.map((donation, index) => (
                <tr>
                  <td className="p-5">{donation.title}</td>
                  <td className="p-5">{donation.message}</td>
                  <td className="p-2">
                    <button className="p-2 bg-orange-500 rounded text-white hover:bg-orange-700">
                      Accept
                    </button>
                  </td>
                  <td className="p-2">
                    <button className="p-2 border-orange-500 border rounded hover:bg-gray-300">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DonationManagement;
