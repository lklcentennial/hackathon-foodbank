"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-white border-b-2 border-black p-4 flex justify-between items-center">
      <Link href={"/"}>
        <div className="text-xl font-bold">FoodBank</div>
      </Link>
      <ul className="flex">
        <li className="mr-6">
          <a
            className="text-black hover:text-yellow-500 transition duration-300 ease-in-out"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-black hover:text-yellow-500 transition duration-300 ease-in-out"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          {!session ? (
            <Link
              className="bg-orange-500 text-white hover:bg-orange-700 rounded px-4 py-2 mt-4 transition duration-300 ease-in-out"
              href="/landing"
            >
              Login
            </Link>
          ) : (
            <Link
              className="bg-orange-500 text-white hover:bg-orange-700 rounded px-4 py-2 mt-4 transition duration-300 ease-in-out"
              href="/dashboard"
            >
              Dashboard
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
