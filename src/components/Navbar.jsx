import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-blue-500 flex justify-around p-4">
      <button className="text-white">Home</button>
      <button className="text-white">Map</button>
      <button className="text-white">Log In</button>
    </div>
  );
};

export default Navbar;
