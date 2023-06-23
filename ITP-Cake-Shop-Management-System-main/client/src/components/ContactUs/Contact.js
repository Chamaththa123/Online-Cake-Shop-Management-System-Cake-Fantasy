import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  const [inputs, setInput] = useState({});

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");

  const [error, setError] = useState("");
  const history = useNavigate();

  const changeOnclick = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      email,
      subject,
      message,
      phone,
    };
    axios
      .post(`http://localhost:8000/contact/add`, newContact)
      .then((res) => console.log(res.data))
      .then(() => history("/OurCollection"), alert(" Message is Send!!!"))
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div>
      <Layout title={"Contact Us"}>
        <Header />
        <hr style={{ marginTop: "-10px" }}></hr>
        <br></br>

        <div className="cantact-column1">
          {error && (
            <div className="alert alert-danger">
              Fill All Required Fileds...!
            </div>
          )}
          <Form onSubmit={changeOnclick}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                  <Form.Text className="text-muted">* Required</Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <Form.Text className="text-muted">* Required</Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Contact No:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Contact No"
                    name="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                  <Form.Text className="text-muted">* Required</Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Subject :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                  />
                  <Form.Text className="text-muted">* Required</Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Message :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <Form.Text className="text-muted">* Required</Form.Text>
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#b666d2",
                border: "none",
                width: "100%",
              }}
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </div>
        <div className="cantact-column1">
          <h1>Contact Us</h1>
          <br></br>

          <p>
            <b>
              <i>
                This form is for general information only. Orders will not be
                placed for messages sent through this form.
              </i>
            </b>
          </p>
          <br></br>
          <br></br>

          <ul>
            <li>
              <p>
                <b>Email : </b>CakeFantasy@gmail.com
              </p>
            </li>

            <li>
              <p>
                <b>Address : </b>347, Galle Road, Colombo 03 ,Sri Lanka
              </p>
            </li>

            <li>
              <p>
                <b>Telephone : </b>011-1234567
              </p>
            </li>
          </ul>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default Contact;
