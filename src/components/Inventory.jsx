import React, { useState } from "react";
import data from "@/components/dummy data/inventory.json";
import ReactPaginate from "react-paginate";
import SearchField from "react-search-field";

const FlexContainer = () => {
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
    <div className={`m-4 flex flex-col`}>
      <div className={"w-auto sm:max-w-300"}>
        <h1 className="text-center">Current inventory</h1>
        <SearchField placeholder="Search item" onChange={handleSearch} />
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="px-3"> Food Name </th>
                <th className="px-3"> Category </th>
                {/* <th className="px-3"> Description </th> */}
                <th className="px-3"> Expiry </th>
                <th className="px-3"> Quantity </th>
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
                    <td>{item.foodname}</td>
                    <td>{item.category}</td>
                    {/* <td>{item.description}</td> */}
                    <td
                      style={{
                        backgroundColor: isExpired ? "lightsalmon" : "white",
                      }}
                    >
                      {item.expiry}
                    </td>
                    <td
                      style={{
                        backgroundColor: lowQuant
                          ? "red"
                          : highQuant
                          ? "lightgreen"
                          : "white",
                      }}
                      className="text-center"
                    >
                      {item.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </div>
  );
};

export default FlexContainer;
