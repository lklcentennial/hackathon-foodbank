import React from 'react';
import Link from 'next/link';
import home from "../app/icons/home.png"
import location from '../app/icons/location.png';
import login from '../app/icons/login.png';


const Navbar = () => {
  return (
    <div className="fixed text-black text-center inset-x-0 bottom-0 bg-blue-500 flex justify-around p-4 invert">
      <Link href='#' className=""><img src={home.src} alt="home" width={30}/>Home</Link>
      <Link href='#' className="text-black "><img src={location.src} alt="location" width={30}/>Map</Link>
      <Link href='#' className="text-black "><img src={login.src} alt="login" width={30}/>Log In</Link>
    </div>
  );
};

export default Navbar;
