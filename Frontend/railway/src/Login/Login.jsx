import  { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const INIT_STATE = {
  email: "",
  password: "",
};

function Login() {
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
      const { email, password } = state;
      if (email && password) {
        const response = await axios.post("http://localhost:4050/admin/adminlogin", state);
        if (response?.data?.length > 0) {
          console.log(response.data);
          alert("You have logged in sucessfully");
          localStorage.setItem("currentUser", JSON.stringify(response.data[0]));
          navigate("/home");
        } else {
          alert("Please enter correct details");
        }
      } else {
        alert("All fields are required");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   localStorage.clear()
  }, []);

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>
      <div
        style={{
          border: "4px solid black",
          padding: "2rem",
          "border-radius": "20px",
          "margin-top": "50px",
          "margin-left": "500px",
          "margin-bottom": "50px",
          "margin-right": "500px",
          "height":"400px",
          "width":"400px"
        }}
      >
        <Form className="loginForm" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
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
          <div style={{marginLeft:"120px",marginTop:"50px"}}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Link to="/register">Register here!!!</Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
