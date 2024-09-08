import React, { useState } from "react";
import "./Navbar.css";
import { SiTheboringcompany } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";
import Modal from "../Components/Modals/Modal"

const Navbar = () => {

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(prev => !prev)
}

  return (
    <>
    {modal ? <Modal /> : null}
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
            <div className="menu" onClick={() => handleModal()}><IoMdMenu /></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
