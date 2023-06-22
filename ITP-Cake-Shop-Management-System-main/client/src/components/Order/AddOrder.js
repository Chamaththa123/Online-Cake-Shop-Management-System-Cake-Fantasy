import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Layout from "../Layout/Layout";
import "../../css.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAuth } from "../../context/auth";

function AddOrder() {
  const id = useParams().id;
  console.log(id);

  const [inputs, setInput] = useState({});

  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8000/oitem/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.oitem));
    };
    fetchHandler();
  }, [id]);

  const [Quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(Quantity + 1);
  };

  const handleDecrement = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  // add
  const shippingcost = 300;

  const [note, setnote] = useState("");
  const [delivery_name, setdelivery_name] = useState("");
  const [delivery_phone, setdelivery_phone] = useState("");
  const [delivery_address, setdelivery_address] = useState("");
  const [delivery_area, setdelivery_area] = useState("");
  const [card_no, setcard_no] = useState("");
  const [exp_year, setexp_year] = useState("");
  const [exp_month, setexp_month] = useState("");

  const [error, setError] = useState("");
  const history = useNavigate();

  const changeOnclick = (e) => {
    e.preventDefault();
    const total = inputs.price * Quantity + shippingcost;
    const quantity = Quantity;
    const user_id = auth?.user?._id;
    const unit_price = inputs.price;
    const shipping = shippingcost;
    const product_image = inputs.image;
    const product_name = inputs.item_name;

    const newOrder = {
      user_id,
      product_name,
      product_image,
      total,
      quantity,
      unit_price,
      shipping,
      note,
      delivery_name,
      delivery_phone,
      delivery_address,
      delivery_area,
      card_no,
      exp_year,
      exp_month,
    };
    axios
      .post(`http://localhost:8000/order/${id}/add`, newOrder)
      .then((res) => console.log(res.data)).then(() => history("/OurCollection"), alert(" Order is Placed Successfully!!!"))
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div>
      <Layout title={"CakeFantasy - Place Order"}>
        <Header />
        <div style={{ backgroundColor: "white" }}>
          <hr style={{ marginTop: "-10px" }}></hr>
          <br></br>
          <center>
            <h2 style={{ fontWeight: "400" }}>Place Your Order</h2>
          </center>
          <br></br>
          <br></br>
          <div className="order-column1">
            <div className="order-column1-1">
              <img
                src={`/uploads/${inputs.image}`}
                alt="ss"
                style={{ width: "180px", height: "160px" }}
                className="img"
              />
            </div>
            <div className="order-column1-2">
              <p style={{ fontSize: "22px" }}>{inputs.item_name}</p>
              <p>{inputs.item_code} By Cake Factasy</p>
              <p>Rs.{inputs.price?.toFixed(2)}</p>
              <br></br>

              <br></br>
            </div>
            <hr></hr>
            <div style={{ margin: "50px" }}>
              <center>
                <button
                  class="btn btn-danger"
                  onClick={handleDecrement}
                  style={{
                    width: "60px",
                    height: "50px",
                    fontSize: "20px",
                  }}
                >
                  -
                </button>
                <span>
                  <button
                    class="btn btn-link"
                    style={{
                      width: "60px",
                      height: "50px",
                      textDecoration: "none",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    {Quantity}
                  </button>
                </span>
                <button
                  class="btn btn-primary"
                  onClick={handleIncrement}
                  style={{
                    width: "60px",
                    height: "50px",

                    fontSize: "20px",
                  }}
                >
                  +
                </button>
              </center>
              <br></br>
              <br></br>
              <br></br>
              <p>
                Unit Price :{" "}
                <c style={{ marginLeft: "60%" }}>
                  Rs.{inputs.price?.toFixed(2)}
                </c>
              </p>
              <p>
                Quantity :<c style={{ marginLeft: "63%" }}>{Quantity}</c>
              </p>
              <p>
                Shipping :
                <c style={{ marginLeft: "59%" }}>
                  &nbsp;&nbsp;&nbsp;Rs.{shippingcost?.toFixed(2)}
                </c>
              </p>
              <hr></hr>
              <p>
                Total Price :
                <c style={{ marginLeft: "58%" }}>
                  &nbsp; Rs.
                  {(inputs.price * Quantity + shippingcost)?.toFixed(2)}
                </c>
              </p>
              <hr></hr>
              <hr></hr>
            </div>
          </div>
          <div className="order-column2" style={{ backgroundColor: "white" }}>
            {error && (
              <div className="alert alert-danger">
                Fill All Required Fileds...!
              </div>
            )}
            <div style={{ width: "99.5%" }}>
              <Form onSubmit={changeOnclick} encType="multipart/form-data">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Add Your Note"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    name="note"
                    value={note}
                    onChange={(e) => setnote(e.target.value)}
                  />
                </FloatingLabel>
                <p style={{ fontSize: "20px" }}>
                  <br></br>
                  <i class="fa fa-angle-double-down"></i> Add Delivery Details
                </p>
                <Row className="mb-1">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Full Name :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        name="delivery_name"
                        value={delivery_name}
                        onChange={(e) => setdelivery_name(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Phone:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="delivery_phone"
                        value={delivery_phone}
                        onChange={(e) => setdelivery_phone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-1">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Address :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        name="delivery_address"
                        value={delivery_address}
                        onChange={(e) => setdelivery_address(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Selete Area :</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="delivery_area"
                        value={delivery_area}
                        onChange={(e) => setdelivery_area(e.target.value)}
                      >
                        <option>Select</option>
                        <option value={"Kegalle"}>Kegalle</option>
                        <option value={"Mawanella"}>Mawanella</option>
                        <option value={"Kadugannawa"}>Kadugannawa</option>
                        <option value={"Kandy"}>Kandy</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <p style={{ fontSize: "20px" }}>
                  <i class="fa fa-angle-double-down"></i> Add Payment Details
                </p>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Card No :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Card No"
                    name="card_no"
                    value={card_no}
                    onChange={(e) => setcard_no(e.target.value)}
                  />
                </Form.Group>
                <Row className="mb-1">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Exp Year</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Exp Year"
                        name="exp_year"
                        value={exp_year}
                        onChange={(e) => setexp_year(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Exp Month</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="exp_month"
                        value={exp_month}
                        onChange={(e) => setexp_month(e.target.value)}
                      >
                        <option>Select</option>
                        <option value={"January"}>January</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        <option value={"June"}>June</option>
                        <option value={"July"}>July</option>
                        <option value={"August"}>August</option>
                        <option value={"September"}>September</option>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>CVV :</Form.Label>
                      <Form.Control type="text" placeholder="CVV" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  style={{ float: "right" }}
                  type="submit"
                >
                  Place Your Order
                </Button>
              </Form>
            </div>
          </div>
        </div>

        <Footer />
      </Layout>
    </div>
  );
}

export default AddOrder;
