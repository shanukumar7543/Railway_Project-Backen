import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

function Fare() {
  return (
    <>
    <Navbar/>
    <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
    <div>
     <h1>Fare Page..</h1> 
    </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Fare;
