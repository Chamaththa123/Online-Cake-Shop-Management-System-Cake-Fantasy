import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = 1;
    const address = "Cake Fantasy";
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
          role,
          type,
        }
      );
      if (res && res.data.success) {
        window.alert(res.data && res.data.message);
        navigate("/Employee");
      } else {
        window.alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      window.alert("Something Wrong!!");
    }
  };
  return (
    <div>
      <>
        <div style={{ backgroundColor: "white" }}>
          <br></br>

          <div
            className="form-container "
            style={{ width: "90%", marginLeft: "5%" }}
          >
            <h3>Add New Employee</h3>
            <br></br>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-1">
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Name :</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Email :</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Phone :</Form.Label>
                    <Form.Control
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Keyword :</Form.Label>
                    <Form.Control
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Password :</Form.Label>
                    <Form.Control
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>System Access :</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="1">Allow</option>
                      <option value="0">Deny</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "48.5%" }}
              >
                Submit Employee Details
              </Button>
            </Form>

            <br></br>
          </div>
        </div>
      </>
    </div>
  );
}

export default AddEmployee;
