"use client";
import React, { useState } from "react";
import data from "@/components/dummy data/inventory.json";
import ReactPaginate from "react-paginate";
import SearchField from "react-search-field";

const InventoryManagement = () => {
  const currentDate = new Date();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleSearch = (value, event) => {
    setSearch(value);
    setCurrentPage(0);
  };

  const filteredData = data.inventoryDetails.filter((item) =>
    item.foodname.toLowerCase().includes(search.toLowerCase())
  );

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);

  return (
    <div className="bg-white container mx-auto flex flex-col p-8 shadow-lg w-screen">
      <div className="bg-white container mx-auto rounded-lg">
        <div className="w-2/3 mx-auto mb-8">
          <h1 className="lg:text-6xl md:text-4xl text-center text-black rounded-lg py-3">
            Current Inventory
          </h1>
          <div className="mt-6 flex items-center justify-center mx-auto">
            <SearchField placeholder="Search item" onChange={handleSearch} />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mx-auto lg:w-2/3">
        <table className="overflow-x-auto w-full border text-center border-gray-300 shadow-lg divide-y divide-gray-200">
          <thead className="bg-gray-100 shadow-lg">
            <tr>
              <th className="px-3 py-2">Food Name</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Expiry</th>
              <th className="px-3 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(offset, offset + PER_PAGE).map((item) => {
              const expiryDate = new Date(item.expiry);
              const isExpired = expiryDate < currentDate;

              const lowQuant = item.quantity < 11;
              const highQuant = item.quantity > 100;

              return (
                <tr key={item._id}>
                  <td className="px-3 py-2">{item.foodname}</td>
                  <td className="px-3 py-2">{item.category}</td>
                  <td
                    className={`px-3 py-2 ${
                      isExpired ? "bg-red-500 text-white" : ""
                    }`}
                  >
                    {item.expiry}
                  </td>
                  <td
                    className={`px-3 py-2 text-center ${
                      lowQuant
                        ? "bg-red-500 text-white"
                        : highQuant
                        ? "bg-green-500 text-white"
                        : ""
                    }`}
                  >
                    {item.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-8 pb-2 flex justify-center justify-content: space-between;">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex gap-2"}
            previousLinkClassName={
              "pagination__link bg-orange-500 text-white p-2 rounded"
            }
            nextLinkClassName={
              "pagination__link bg-orange-500 text-white p-2 rounded"
            }
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            pageClassName={"invisible"}
          />
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  HAMPER
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Korean Hamper
                </h1>
                <p class="leading-relaxed mb-3">
                  This hamper contains kimchi, chick, rice, and other random
                  selected items.
                </p>
                <a class="bg-green-500 text-white p-2 rounded inline-flex items-center">
                  Available
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  HAMPER
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  South Asian Hamper
                </h1>
                <p class="leading-relaxed mb-3">
                  {" "}
                  This hamper contains rice, naan, chicken, spices, and other
                  random selected items.
                </p>
                <a class="bg-green-500 text-white p-2 rounded inline-flex items-center">
                  Available
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  HAMPER
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Italian Hamper
                </h1>
                <p class="leading-relaxed mb-3">
                  this hamper contains pasta, rice, cheese, and other random
                  selected items.
                </p>
                <a class="bg-red-500 text-white p-2 rounded inline-flex items-center">
                  {" "}
                  Not Available
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryManagement;
