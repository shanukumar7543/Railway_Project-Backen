import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function Add_Train() {
  let [train_no, setTrain_no] = useState("");
  let [train_name, setTrain_name] = useState("");

  function submitData() {
    // alert("you are clicked")
    let userdata = {
      train_no: train_no,
      train_name: train_name,
    };
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:4050/train/add", reqData).then((response) =>
      console.log(`Data Submitted ${response.status}`)
    );
  }

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
        >
          <div>
            <h1 style={{ fontSize: "45px", color: "black" }}>Add_Train</h1>
          </div>
          <Row>
            <Col>
              <label style={{ fontSize: "25px"}}>Train_no</label>
              <input style={{width:"400px"}}
                className="form-control"
                placeholder=" "
                type="text"
                value={train_no}
                onChange={(e) => setTrain_no(e.target.value)}
              />

              <label style={{ fontSize: "25px"}}>Train_name</label>
              <input style={{width:"400px"}}
                className="form-control"
                placeholder=" "
                type="text"
                value={train_name}
                onChange={(e) => setTrain_name(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <button
                type="submit"
                style={{
                  padding: "10px",
                  marginRight: "10px",
                  fontSize: "15px",
                }}
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

export default Add_Train;
