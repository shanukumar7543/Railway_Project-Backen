import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Logout() {
  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
        <div>
          <Sidebar/>
        </div>
        <Container
          flud="md"
          style={{
            backgroundColor: "lightblue",
            width: "100%",
            color: "black",
            padding: "75px",
            margin: "10px",
            paddingLeft:"145px"
          }}
        ></Container>
        </div>
    <div>
      {document.alert("Logout Successfully")}
    </div>
    
    </>
  )
}

export default Logout;
