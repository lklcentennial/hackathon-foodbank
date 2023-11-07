import React from 'react';
import { Link } from 'react-router-dom';
import home from "../app/icons/home.png"
import location from '../app/icons/location.png';
import login from '../app/icons/login.png';


const Navbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-blue-500 flex justify-around p-4">
      <button className="text-white"><img src={home.src} alt="home" width={30}/>Home</button>
      <button className="text-white"><img src={location.src} alt="location" width={30}/>Map</button>
      <button className="text-white"><img src={login.src} alt="login" width={30}/>Log In</button>
    </div>
  );
};

export default Navbar;
