import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactDetails() {
  const id = useParams().id;
  console.log(id);
  const history = useNavigate();
  const [inputs, setInput] = useState({});

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8000/Contact/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.contact));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8000/contact/update/${id}`, {
        status: String(inputs.status),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(
      () => history("/AllContact"),
      window.alert("Set Message Status Successfully!!!")
    );
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="content">
        <Sidebar />
        <div className="main">
          <br></br>

          <div className="main-card" style={{ height: "500px" }}>
            <div style={{ marginLeft: "5%" }}>
              <br></br>
              <h2>Subject : {inputs.subject}</h2>
              <br></br>
              <br></br>
              <p>
                <b><i class='fas fa-angle-double-right'></i> Customer Name :</b>&nbsp;&nbsp;&nbsp;{inputs?.name}
              </p>
              <p>
                <b><i class='fas fa-angle-double-right'></i> Customer Email :</b>&nbsp;&nbsp;&nbsp;{inputs?.email}
              </p>
              <p>
                <b><i class='fas fa-angle-double-right'></i> Customer Phone :</b>&nbsp;&nbsp;&nbsp;{inputs?.phone}
              </p>
              <p>
                <b><i class='fas fa-angle-double-right'></i> Customer Message :</b>&nbsp;&nbsp;&nbsp;{inputs?.message}
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <b><i class='fas fa-angle-double-right'></i> Status :</b>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "20%" }}
                    name="status"
                    value={inputs?.status}
                    onChange={handleChange}
                  >
                    <option value="Read">Read</option>
                    <option value="Unread">Unread</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "20%" }}
                >
                  Update Status
                </Button>
              </Form>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
