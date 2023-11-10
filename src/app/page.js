"use client";
import React from "react";
import Navbar from "@/components/Navbar";
// import GoogleMap from './googlemap';
import Link from "next/link";
import Services from "@/components/Services";
import Card from "@/components/Card";
// import { GoogleMap } from '@react-google-maps/api';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white-500 h-screen flex justify-center items-center">
        <div className="text-center text-orange">
          <h1 className="text-6xl font-bold mb-6">Find your local FoodBank</h1>
          <div className="space-y-4">
            <Link
              href="/locate"
              className="bg-orange-500 text-white py-4 px-8 rounded hover:bg-orange-700 hover:text-white transition duration-300"
            >
              Locate nearest FoodBank
            </Link>
            <Link
              href="/landing"
              className="bg-white text-orange-500 py-4 px-8 rounded hover:bg-gray-600 hover:text-white transition duration-300"
            >
              I own a FoodBank
            </Link>
          </div>
        </div>
      </div>
    <Services />

    </div>
  );
};

export default Home;
