import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';


function Train() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState();
  const [train_no, setTrain_no] = useState();
  const [train_name, setTrain_name] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = () => {
    return fetch("http://localhost:4050/train/view/")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  function submitData(train_no, train_name) {
    setTrain_no(train_no);
    setTrain_name(train_name);

    handleShow();
  }

  function patchData() {
    let data = { train_no, train_name };
    let reqData = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`http://localhost:4050/train/update/${train_no}`, reqData).then(
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
        <div
          style={{
            marginLeft: "40px",
            width: "100%",
            marginTop: "20px",
            paddingRight: "20px",
          }}
        >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Train No.</th>
                <th>Train Name</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            {data.map((value, index) => {
              return (
                <>
                  <tbody>
                    <tr key={index}>
                      <td> {value.train_no}</td>
                      <td> {value.train_name}</td>

                      <td>
                        <Button
                          onClick={() => {
                            handleShow();
                            submitData(value.train_no, value.train_name);
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
                          <label>Train_no</label>
                          <input
                            className="form-control"
                            placeholder=" "
                            type="text"
                            value={train_no}
                            onChange={(e) => setTrain_no(e.target.value)}
                          />

                          <label>Train_Name</label>
                          <input
                            className="form-control"
                            placeholder=" "
                            type="text"
                            value={train_name}
                            onChange={(e) => setTrain_name(e.target.value)}
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
      <Footer />
    </>
  );
}

export default Train;
