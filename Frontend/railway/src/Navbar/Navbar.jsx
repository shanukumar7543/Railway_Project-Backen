import React from "react";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navs">
        <div className="logo">
          <img
            src="https://i.pinimg.com/originals/6a/72/4b/6a724b9501764fd83a4abcd37b58144d.png"
            height="60px"
          />
        </div>

        <div className="welcome">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Shanu Kumar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to ="/myprofile">My Profile</Link></Dropdown.Item>
              <Dropdown.Item><Link to ="/login">Logout</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
