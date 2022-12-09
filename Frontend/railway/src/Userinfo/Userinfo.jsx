import { React, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Userinfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        <Container
          flud="md"
          style={{
            // backgroundColor: "lightblue",
            width: "100%",
            color: "black",
            padding: "75px",
            margin: "10px",
            paddingLeft: "15px",
          }}
        >
          <h1> My Profile Details </h1>
          <Button variant="primary" onClick={handleShow}>
            My Profile
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Userinfo;
