import React from "react";
import Link from "next/link";
import home from "../app/icons/home.png";
import location from "../app/icons/location.png";
import login from "../app/icons/login.png";

const Navbar = () => {
  const test = "Home";
  return (
    <div className="fixed text-white text-center inset-x-0 bottom-0 bg-slate-700 flex justify-around p-4 ">
      <Link href="#" className="flex flex-col items-center justify-center">
        <img src={home.src} alt="home" width={30} className="invert"/>
        <p>{test}</p>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center">
        <img src={location.src} alt="location" width={30} className="invert"/>
        <p>{test}</p>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center">
        <img src={login.src} alt="login" width={30} className="invert"/>
        <p>{test}</p>
      </Link>
    </div>
  );
};

export default Navbar;
