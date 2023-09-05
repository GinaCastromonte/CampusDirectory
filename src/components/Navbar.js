import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserGraduate, FaBuilding } from "react-icons/fa";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <nav
      id="navbar"
      className="w-screen flex justify-center items-center bg-gray-800 h-[7vh]"
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="hidden md:flex space-x-6">
          <NavLink
            className={` text-gray-300 flex items-center justify-center space-x-1 ${
              activeLink === "/" ? "text-white font-bold" : "font-normal"
            }`}
            to="/"
            onClick={() => handleNavLinkClick("/")}
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            className={`text-gray-300  flex items-center justify-center space-x-1 ${
              activeLink === "/students"
                ? "text-white font-bold"
                : "font-normal"
            }`}
            to="/students"
            onClick={() => handleNavLinkClick("/students")}
          >
            <FaUserGraduate />
            Students
          </NavLink>
          <NavLink
            className={`text-gray-300  flex items-center justify-center space-x-1 ${
              activeLink === "/campuses"
                ? " text-white font-bold"
                : "font-normal"
            }`}
            to="/campuses"
            onClick={() => handleNavLinkClick("/campuses")}
          >
            <FaBuilding />
            Campuses
          </NavLink>
        </div>
        <div className="md:hidden flex">
          <div className="space-x-6 flex items-center justify-center">
            <NavLink
              className={`text-gray-300  ${
                activeLink === "/" && "text-white font-bold"
              }`}
              to="/"
              onClick={() => handleNavLinkClick("/")}
            >
              <FaHome />
            </NavLink>
            <NavLink
              className={`text-gray-300  ${
                activeLink === "/students" && "text-white font-bold"
              }`}
              to="/students"
              onClick={() => handleNavLinkClick("/students")}
            >
              <FaUserGraduate />
            </NavLink>
            <NavLink
              className={`text-gray-300 ${
                activeLink === "/campuses" && " text-white font-bold"
              }`}
              to="/campuses"
              onClick={() => handleNavLinkClick("/campuses")}
            >
              <FaBuilding />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
