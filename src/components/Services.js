import React from "react";

const Services = () => {
  return (
    <div class="text-gray-600 body-font" id="services">
      <h1 className="text-2xl font-bold pt-4 m-4 text-center text-black ">
        Upcoming Event
      </h1>
      <div class="container mx-auto flex flex-col">
        <div class=" px-10 py-1 rounded-lg mx-auto shadow-lg">
          <div class="flex flex-col sm:flex-row mt-10">
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
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                Food Sorting in the Production Hall Help sort donated food
                and/or re-package bulk food items in preparation for shipping to
                Daily Bread member food banks in the city.
              </p>
              <a class="bg-orange-500 text-white hover:bg-orange-700 rounded px-4 py-2 mt-4 transition duration-300 ease-in-out inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto flex flex-col">
        <div class=" px-10 py-4 rounded-lg mx-auto shadow-lg">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class=" inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="https://www.dailybread.ca/wp-content/uploads/2023/08/Volunteer_IndVolunteering_Picking.png"
                  alt="v2"
                />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Picking Day
                </h2>
                <div class="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                <p class="text-left">
                  Weekdays:9:00am – 12:00pm or 1:00pm – 4:00pm
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                Order Picking in the Warehouse Help fulfill food orders from
                member agencies by picking pre-packaged food boxes from shelves
                and stacking them on pallets.
              </p>
              <a class="bg-orange-500 text-white hover:bg-orange-700 rounded px-4 py-2 mt-4 transition duration-300 ease-in-out inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto flex flex-col">
        <div class=" px-10 py-4 rounded-lg mx-auto shadow-lg">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class=" inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="https://www.dailybread.ca/wp-content/uploads/2023/08/Volunteer_IndVolunteering_Prepping.png"
                  alt="v3"
                />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Prepping Day
                </h2>
                <div class="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                <p class="text-left">
                  Weekdays:8:30am – 11:30am or 12:30pm – 3:30pm
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                Kitchen Assistance Help prepare soups and casseroles for meal
                programs across the city, as well as our on-site Community Meal,
                and daily lunch service.
              </p>
              <a class="bg-orange-500 text-white hover:bg-orange-700 rounded px-4 py-2 mt-4 transition duration-300 ease-in-out inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
