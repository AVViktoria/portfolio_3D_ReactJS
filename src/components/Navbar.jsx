import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { NavLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
return(
  <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
  >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scroll(0,0)
        }}
      >
        <img src={logo}  alt="logo_img" className="w-9 h-9 object-obtain" / >

      </Link>
    </div>
  </nav>
)};

export default Navbar;
