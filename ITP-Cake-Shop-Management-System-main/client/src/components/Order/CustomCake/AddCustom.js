import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddCustom() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [quantity, setquantity] = useState("");
  const [type, settype] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");
  const [fileName, setFileName] = useState("");

  const [error, setError] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnclick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("quantity", quantity);
    formData.append("type", type);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", fileName);

    setname("");
    setemail("");
    setphone("");
    setquantity("");
    settype("");
    setdate("");
    setdescription("");
    setFileName("");

    axios
      .post("http://localhost:8000/custom/save", formData)
      .then((res) =>
        window.alert("Order is Added Successfully!!", {
          position: "top-right",
          autoClose: 7000,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .catch((err) => {
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <Header />
      <hr style={{ marginTop: "-10px" }}></hr>

      <div style={{ margin: "50px" }}>
        <br></br>
        <center>
          <h2 style={{ fontWeight: "600" }}>
            Design Your Dream Cake and Flower Bouquets
          </h2>
        </center>
        <br></br>
        <p style={{ fontSize: "22px" }}>
          For creating your own custom cakes, the following are the steps that
          are required to be followed
        </p>
        <br></br>

        <ul>
          <li>
            Drop your design on us (with specifications) and we’ll be please to
            take care of your order.
          </li>
          <li>
            Our concern team member will contact you with quotations just after
            you’ll place order.
          </li>
          <li>
            We have expertise to bake all your dream cakes that will fulfil you
            dreamy desires.
          </li>
          <li>
            With the help of best qualified designer, we are Srilanka’s best
            baker of all kind of cakes.
          </li>
        </ul>

        <div style={{ margin: "100px" }}>
          {error && (
            <div className="alert alert-danger">
              Fill All Required Fileds...!
            </div>
          )}

          <Form onSubmit={changeOnclick} encType="multipart/form-data">
            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    name="name"
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p style={{ color: "red" }}>* Required</p>
                </Form.Text>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Password"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    name="email"
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p style={{ color: "red" }}>* Required</p>
                </Form.Text>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Number :</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter email"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    name="phone"
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p style={{ color: "red" }}>* Required</p>
                </Form.Text>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Order Type :</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={type}
                    onChange={(e) => settype(e.target.value)}
                    name="type"
                  >
                    <option>Select Category</option>
                    <option value={"Flowers"}>Flowers</option>
                    <option value={"Chocolate"}>Chocolate</option>
                    <option value={"Cartoon Cake"}>Cartoon Cake</option>
                    <option value={"Anniversary Cake"}>Anniversary Cake</option>
                    <option value={"Icing Cake"}>Icing Cake</option>
                    <option value={"Kids Cake"}>Kids Cake</option>
                    <option value={"Cup Cake"}>Cup Cake</option>
                    <option value={"Wedding Cake"}>Wedding Cake</option>
                    <option value={"Flowers"}>Flowers</option>
                    <option value={"Bday Cake"}>B'day Cake</option>
                    <option value={"Print Cake"}>Print Cake</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                    <p style={{ color: "red" }}>* Required</p>
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Quantity :</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter email"
                    value={quantity}
                    onChange={(e) => setquantity(e.target.value)}
                    name="quantity"
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p style={{ color: "red" }}>* Required</p>
                </Form.Text>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Required Date :</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter email"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    name="date"
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p style={{ color: "red" }}>* Required</p>
                </Form.Text>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image :</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter email"
                    name="image"
                    onChange={onChangeFile}
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p>* If you have designed image , please upload here.</p>
                </Form.Text>
              </Col>
            </Row>

            <Row className="mb-1">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description :</Form.Label>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    rows="4"
                    name="description1"
                    placeholder="(Plain text only)"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  <p style={{ color: "red" }}>* Required</p>
                </Form.Text>
              </Col>
            </Row>

            <Button
              type="submit"
              style={{ backgroundColor: "#b666d2", border: "none" }}
            >
              Place Custom Order
            </Button>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AddCustom;
