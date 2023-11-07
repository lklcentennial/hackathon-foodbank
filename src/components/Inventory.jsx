import React from "react";
import data from "@/components/dummy data/inventory.json";

const FlexContainer = () => {
  return (
    <div className={`m-4 flex flex-col`}>
      <table>
        <thead>
          <tr>
            <th>Food ID</th>
            <th>Food Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.inventoryDetails.map((item) => (
            <tr key={item.foodid}>
              <td>{item.foodid}</td>
              <td>{item.foodname}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlexContainer;
