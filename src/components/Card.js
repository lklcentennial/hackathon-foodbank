import React from "react";

const Card = () => {
  return (
    <div class="flex flex-col">
      <div class="px-10 py-1 rounded-lg shadow-xl border-t-2 border-orange-500">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class=" inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              src="https://www.dailybread.ca/wp-content/uploads/2023/08/Volunteer_IndVolunteering_Sorting.png"
              alt="v1"
            />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
              Sorting Day
            </h2>
            <div class="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
            <p class="text-left">
              Weekdays:8:30am – 11:30am or 12:30pm – 3:30pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
