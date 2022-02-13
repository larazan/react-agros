import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Menu from "../Menu";

import imgLogo from "../../assets/logo-agros.png";

const Navbar = () => {
    const [catOpen, setCatOpen] = useState(false);

    const catToggle = () => {
        setCatOpen(!catOpen);
      };

  return <>
    <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white shadow border-b">
        {/* <div className="absolute inset-0 shadow-lg opacity-50"></div> */}
        <div className="flex inline-flex space-x-4">
          <button className="h-8 w-8 md:hidden" onClick={catToggle}>
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center hidden md:flex">
            <Link to="/">
              <div className="text-sm font-semibold text-gray-800 uppercase font-semibold">
                <div>
                  <img className="h-8" src={imgLogo} alt="logo" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex inline-flex space-x-8">
            
          <div className="flex items-center hidden md:flex">
            <Link to="/about">
              <span className="text-sm font-semibold text-gray-800 uppercase ">
                Tentang
              </span>
            </Link>
          </div>
        
          <div className="flex items-center hidden md:flex">
            <Link to="/profile">
              <span className="text-sm font-semibold text-gray-800 uppercase ">
                Profil
              </span>
            </Link>
          </div>

          
        </div>
      </header>

      <Menu catOpen={catOpen} catToggle={catToggle} />
  </>;
};

export default Navbar;
