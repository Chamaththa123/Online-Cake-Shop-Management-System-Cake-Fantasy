import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Sidebar from "../Layout/Sidebar";

function UpdateOitem() {
  const [inputs, setInput] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (inputs.item_code?.startsWith("OI")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputs.item_code]);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8000/oitem/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.oitem));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8000/oitem/update/${id}`, {
        item_code: String(inputs.item_code),
        item_name: String(inputs.item_name),
        description1: String(inputs.description1),
        description2: String(inputs.description2),
        description3: String(inputs.description3),
        price: Number(inputs.price),
        status: String(inputs.status),
        category: String(inputs.category),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(
      () => history("/Product"),
      window.alert("Update Other Item Details Successfully!!!")
    );
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="content">
      <Sidebar />
      <div className="main">
        <br></br>
        <div className="main-card">
          <div style={{ width: "98%", margin: "10px" }}>
            <br></br>
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              Update Item Details Of {inputs.item_code}
            </p>

            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Code :</Form.Label>
                <Form.Control
                  type="text"
                  value={inputs.item_code}
                  onChange={handleChange}
                  name="item_code"
                />
                <Form.Text className="text-muted">
                  <p>* Required</p>
                </Form.Text>
              </Form.Group>
              {!isValid && (
                <p style={{ color: "red" }}>Item Code must start with 'OI'.</p>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Name :</Form.Label>
                <Form.Control
                  type="text"
                  value={inputs.item_name}
                  onChange={handleChange}
                  name="item_name"
                />
                <Form.Text className="text-muted">
                  <p>* Required</p>
                </Form.Text>
              </Form.Group>

              <Row className="mb-1">
                <Col>
                  <Form.Label>Category :</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    value={inputs.category}
                    onChange={handleChange}
                  >
                    <option value={"Flowers"}>Flowers</option>
                    <option value={"Chocolate & GIFT Pack"}>
                      Chocolate & GIFT Pack
                    </option>
                    <option value={"Mugs & Cards"}>Mugs & Cards</option>
                    <option value={"Cake Ingredient"}>Cake Ingredient</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    <p>* Required</p>
                  </Form.Text>
                </Col>

                <Col>
                  <Form.Label>Item Status :</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    value={inputs.status}
                    onChange={handleChange}
                  >
                    <option value={"In Stock"}>In Stock</option>
                    <option value={"Out Of Stock"}>Out Of Stock</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    <p>* Required</p>
                  </Form.Text>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description 01 :</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  rows="4"
                  name="description1"
                  value={inputs.description1}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Enter normal text description.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description 02 :</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ fontWeight: "bold" }}
                  aria-label="With textarea"
                  rows="4"
                  name="description2"
                  value={inputs.description2}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Enter bold text description.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description 03 :</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ color: "red" }}
                  aria-label="With textarea"
                  rows="4"
                  name="description3"
                  value={inputs.description3}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Enter red color text description.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item Price :</Form.Label>
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={inputs.price}
                  onChange={handleChange}
                  name="price"
                />
                <Form.Text className="text-muted">
                  <p>* Required</p>
                </Form.Text>
              </Form.Group>

              <button
                type="submit"
                className="button"
                style={{
                  marginTop: "15px",
                  width: "100%",
                  height: "40px",
                  borderRadius: "6px",
                  backgroundColor: "#FAB200",
                  border: "none",
                }}
                onClick={handleSubmit}
                disabled={!isValid}
              >
                <i class="fas fa-edit"></i> &nbsp;Update Details
              </button>
            </form>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateOitem;
