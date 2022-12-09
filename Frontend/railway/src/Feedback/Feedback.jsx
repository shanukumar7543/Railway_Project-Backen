import React from "react";
import Table from "react-bootstrap/Table";
import  { useEffect, useState } from "react";
import {Button, Container, } from 'react-bootstrap';
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Feedback from "react-bootstrap/esm/Feedback";


function Feedback() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:4050/feedback/view/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
        <div>
          <Sidebar/>
        </div>
        
    <div style={{marginLeft:"40px",width:"100%",marginTop:"20px",paddingRight:"20px"}}>
       <Table striped bordered hover variant="dark">
        <thead>
          <tr>
           
            <th>User_id</th>
            <th>Massage</th>
            <th>Update</th>
            <th>Delete</th>
            
          </tr>
        </thead>

        {
          data.map((value, index) => {
            return (
              <>
                <tbody>

                  <tr key={index}>
                    <td> {value.user_id}</td>
                    <td> {value.massage}</td>
                    <td><Button variant="primary">Update</Button></td>
                  <td><Button variant="danger" >Delete</Button></td>

                  </tr>

                </tbody>

              </>)
          })
        }
      </Table>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Feedback;






  

  

