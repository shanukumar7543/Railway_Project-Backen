import React from "react";
import Footer from "../Footer/Footer";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import Chart from "../Chart/Chart";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:4050/train/view/")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [data1, setData1] = useState([]);

  const fetchData1 = () => {
    return fetch("http://localhost:4050/station/view/")
      .then((response) => response.json())
      .then((data) => setData1(data));
  };
  useEffect(() => {
    fetchData1();
  }, []);

  return (
    <>
      <div style={{ display: "flex", margin: "5px" }}>
        {/* <h1>Dashbord</h1> */}

        <Card
          style={{
            width: "18rem",
            marginRight: "20px",
            color: "white",
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(76deg, rgba(2,0,36,1) 0%, rgba(144,18,181,0.8130602582830007) 10%, rgba(23,158,184,1) 89%)",
          }}
        >
          <Card.Body>
            <Card.Title>Total Trains</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ color: "white" }}
            >
              Train
            </Card.Subtitle>
            <Card.Text>
              <h1>{data.length}</h1>
            </Card.Text>
            <Link to="/train">See More</Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            color: "white",
            width: "18rem",
            marginRight: "20px",
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(76deg, rgba(2,0,36,1) 12%, rgba(161,22,201,0.32566530029980745) 68%, rgba(197,208,13,1) 94%)",
          }}
        >
          <Card.Body>
            <Card.Title>Total Station</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ color: "white" }}
            >
              Station
            </Card.Subtitle>
            <Card.Text>
              <h1>{data1.length}</h1>
            </Card.Text>
            <Link to="/station">See more</Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            color: "white",
            width: "18rem",
            marginRight: "20px",
            background: "rgb(11,215,191)",
            background:
              "linear-gradient(190deg, rgba(21,206,191,1) 51%, rgba(9,100,107,0.32566530029980745) 52%, rgba(25,13,208,1) 53%)",
          }}
        >
          <Card.Body>
            <Card.Title>Total Revenue</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Revenue</Card.Subtitle>
            <Card.Text>
              <p>Total Payment:${<h1>50000</h1>}</p>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{
            color: "white",
            width: "18rem",
            marginRight: "20px",
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(299deg, rgba(2,0,36,1) 12%, rgba(113,62,217,0.32566530029980745) 43%, rgba(25,13,208,1) 74%)",
          }}
        >
          <Card.Body>
            <Card.Title>Total Ticket Booking</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              <p>Total Booked Ticket:${<h1>12</h1>}</p>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Chart />
      </div>
      {/* <Footer/> */}
    
  </>
  );
}

export default Dashboard;
