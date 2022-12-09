import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Trainshedule() {
  return (
    <>
    <Navbar/>

    <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
       
    <div>
      <h2>Train Shedule...</h2>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Trainshedule;
