import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function Station() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [station_id, setStation_id] = useState("");
  const [station_name, setStation_name] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [pin_code, setPin_code] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = () => {
    return fetch("http://localhost:4050/station/view/")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  function submitData(
    station_id,
    station_name,
    state,
    city,
    location,
    pin_code
  ) {
    setStation_id(station_id);
    setStation_name(station_name);
    setState(state);
    setCity(city);
    setLocation(location);
    setPin_code(pin_code);

    handleShow();
  }

  function patchData() {
    let data = { station_id, station_name, state, city, location, pin_code };
    let reqData = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`http://localhost:4050/station/update/${station_id}`, reqData).then(
      (result) => {
        result.json().then((resp) => {
          console.warn(resp);
        });
      }
    );
  }

  return (
    <>
    <Navbar />
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
       
        <div style={{marginLeft:"40px",width:"100%",marginTop:"20px",paddingRight:"20px"}} >
       <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Station_id.</th>
            <th>Station_name</th>
            <th>State</th>
            <th>City</th>
            <th>Location</th>
            <th>Pin_Code</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        {data.map((value, index) => {
          return (
            <>
              <tbody>
                <tr key={index}>
                  <td> {value.station_id}</td>
                  <td> {value.station_name}</td>
                  <td> {value.state}</td>
                  <td> {value.city}</td>
                  <td> {value.location}</td>
                  <td> {value.pin_code}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleShow();
                        submitData(
                         value.station_id,
                        value.station_name,
                         value.state,
                         value.city,
                        value.location,
                        value.pin_code
                        );
                      }}
                      variant="primary"
                    >
                      <UpdateRoundedIcon/>
                    </Button>
                  </td>

                  <td>
                    <Button variant="danger"><DeleteRoundedIcon/></Button>
                  </td>
                </tr>
              </tbody>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> Update Details</Modal.Header>
                <Modal.Body>
                  {/* <div><h1>Add_offer</h1></div> */}
                  <Row>
                    <Col>
                      <label>Station_Id</label>
                      <input
                        className="form-control"
                        placeholder=" "
                        type="text"
                        value={station_id}
                        onChange={(e) => setStation_id(e.target.value)}
                      />

                      <label>Station_Name</label>
                      <input
                        className="form-control"
                        placeholder=" "
                        type="text"
                        value={station_name}
                        onChange={(e) => setStation_name(e.target.value)}
                      />

                      <label>State</label>
                      <input
                        className="form-control"
                        placeholder=" "
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />

                      <label>City</label>
                      <input
                        className="form-control"
                        placeholder=" "
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />

                      <label>Location</label>
                      <input
                        className="form-control"
                        placeholder=" "
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />

                      <label>Pin_Code</label>
                      <input
                        className="form-control"
                        placeholder=" "
                        type="text"
                        value={pin_code}
                        onChange={(e) => setPin_code(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <br />
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={patchData}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        })}
       </Table>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Station;
