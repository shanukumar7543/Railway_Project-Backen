import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function AddSeat() {
  return (
    <>
    <Navbar/>
    <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
    <div>
      <h1>AddSeat Page</h1>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AddSeat;

