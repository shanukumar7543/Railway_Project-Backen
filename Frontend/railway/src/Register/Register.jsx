import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const INIT_STATE = {
  id: "",
  name: "",
  email: "",
  password: "",
  contact_no: "",
  role: "",
};

function Register() {
  const [state, setstate] = useState(INIT_STATE);
  let navigate = useNavigate();
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setstate((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { id, name, email, password, contact_no, role } = state;
      if (id && name && email && password && contact_no && role) {
        const response = await axios.post(
          "http://localhost:4050/admin/adminregister",
          state
        );
        alert("You have registered sucessfully");
        navigate("/login");
      } else {
        alert("All fields are required");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1>Register Page</h1>
      </div>
      <div
        style={{
          border: "4px solid black",
          padding: "2rem",
          "border-radius": "20px",
          "margin-top": "50px",
          "margin-left": "500px",
          "margin-bottom": "150px",
          "margin-right": "500px",
          height: "700px",
          width: "500px",
        }}
      >
        <Form className="RegisterForm" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              placeholder="Enter ID"
              onChange={inputHandler}
              value={state.id}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={inputHandler}
              value={state.name}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={inputHandler}
              value={state.email}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={inputHandler}
              value={state.password}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact_no</Form.Label>
            <Form.Control
              type="text"
              name="contact_no"
              placeholder="Contact_no"
              onChange={inputHandler}
              value={state.contact_no}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              placeholder="Role"
              onChange={inputHandler}
              value={state.role}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Link to="/login">Already registerd!</Link>
        </Form>
      </div>
    </>
  );
}

export default Register;
