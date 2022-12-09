import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Add_Station() {
  let [station_id, setStation_id] = useState("");
  let [station_name, setStation_name] = useState("");
  let [state, setState] = useState("");
  let [city, setCity] = useState("");
  let [location, setLocation] = useState("");
  let [pin_code, setPin_code] = useState("");

  function submitData() {
    // alert("you are clicked")
    let userdata = {
      station_id: station_id,
      station_name: station_name,
      state: state,
      city: city,
      location: location,
      pin_code: pin_code,
    };
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:4050/station/add", reqData).then((response) =>
      console.log(`Data Submitted ${response.status}`)
    );
  }

  return (
    <>
       <Navbar/>
       <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
      <Container
        flud="md"
        style={{
          background: 'rgb(109,138,52)',
background: 'linear-gradient(143deg, rgba(109,138,52,1) 1%, rgba(161,242,237,1) 90%, rgba(129,99,67,0.32566530029980745) 94%)',
          width: "100%",
          color: "black",
          padding: "15px",
          paddingLeft:"250px",
          margin: "10px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "25px", color: "black" }}>Add_Station</h1>
        </div>
        <Row>
          <Col>
            <label style={{ fontSize: "25px"}}>Station_id</label>
            <input style={{width:"400px"}}
              className="form-control"
              placeholder=" "
              type="text"
              value={station_id}
              onChange={(e) => setStation_id(e.target.value)}
            />

            <label style={{ fontSize: "25px"}}>Station_name</label>
            <input style={{width:"400px"}}
              className="form-control"
              placeholder=" "
              type="text"
              value={station_name}
              onChange={(e) => setStation_name(e.target.value)}
            />

            <label style={{ fontSize: "25px"}}>State</label>
            <input style={{width:"400px"}}
              className="form-control"
              placeholder=" "
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />

            <label style={{ fontSize: "25px"}}>City</label>
            <input style={{width:"400px"}}
              className="form-control"
              placeholder=" "
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <label style={{ fontSize: "25px"}}>Location</label>
            <input style={{width:"400px"}}
              className="form-control"
              placeholder=" "
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label style={{ fontSize: "25px"}}>Pin_Code</label>
            <input style={{width:"400px"}}
              className="form-control"
              placeholder=" "
              type="text"
              value={pin_code}
              onChange={(e) => setPin_code(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <button
              type="submit"
              style={{ padding: "10px", marginRight: "10px", fontSize: "15px" }}
              onClick={submitData}
              className="btn btn-primary"
            >
              Save
            </button>
            <button
              style={{
                padding: "10px",
                marginRight: "10px",
                justifyContent: "space-between",
                fontSize: "15px",
              }}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </Col>
        </Row>
      </Container>
      </div>
      <Footer/>
    </>
  );
}

export default Add_Station;
