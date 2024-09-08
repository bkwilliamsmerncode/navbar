import React from "react";
import "./Navbar.css";
import { SiTheboringcompany } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav id="main">
        <div className="navLeft">
          <div className="logo">
            <SiTheboringcompany />
          </div>
        </div>
        <div className="navRight">
            <div className="pages"><p>Homepage</p></div>
            <div className="pages"><p>About</p></div>
            <div className="pages"><p>Contact</p></div>
            <div className="pages"><p>Info</p></div>
            <div className="pages"><p>Profile</p></div>
            <div className="pages"><p>Logout</p></div>
            <div className="menu"><IoMdMenu /></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
