import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../css.css";
import Sidebar from "../Layout/Sidebar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Table } from "react-bootstrap";
import OrderReport from "./OrderReport";

function Order() {
  const [order, setorder] = useState([]);
  console.log(order);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOrders();
  }, [id]);
  const getOrders = () => {
    axios
      .get("http://localhost:8000/orders")
      .then((res) => {
        setorder(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  function Button({ status }) {
    return (
      <p
        style={{
          color: status === "Processing" ? "#FC8900" : "green",
          backgroundColor: status === "Processing" ? "#FCC98C " : "#8EFF94",
          width: "100px",
          borderRadius: "16px",
          height: "22px",
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {status}
      </p>
    );
  }

  const [order_Count, setorder_Count] = useState([]);
  useEffect(() => {
    getorder_Count();
  }, []);
  const getorder_Count = () => {
    axios
      .get("http://localhost:8000/OrderCount")
      .then((res) => {
        setorder_Count(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [ProcessingCount, setProcessingCount] = useState([]);
  useEffect(() => {
    getProcessingCount();
  }, []);
  const getProcessingCount = () => {
    axios
      .get("http://localhost:8000/ProcessingCount")
      .then((res) => {
        setProcessingCount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [CompleteCount, setCompleteCount] = useState([]);
  useEffect(() => {
    getCompleteCount();
  }, []);
  const getCompleteCount = () => {
    axios
      .get("http://localhost:8000/CompleteCount")
      .then((res) => {
        setCompleteCount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="content">
        <Sidebar />
        <div className="main">
          <br></br>

          <div className="main-card">
            <p
              className="p-main-card"
              style={{ fontSize: "30px", fontWeight: "500" }}
            >
              All Orders
            </p>
            <hr></hr>
            <div>
              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ backgroundColor: "#B666D2" }}
                >
                  <i
                    class="fas fa-shopping-basket"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp; All Orders
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_Count}</i>
                </b>
              </p>

              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ marginLeft: "12%", backgroundColor: "#116BFF" }}
                >
                  <i
                    class="fas fa-shopping-basket"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp;Checked Orders
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{1}</i>
                </b>
              </p>

              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ marginLeft: "12%", backgroundColor: "#FFAC0F " }}
                >
                  <i
                    class="fas fa-shopping-basket"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp;Processing Orders
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ProcessingCount}</i>
                </b>
              </p>
              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ marginLeft: "12%", backgroundColor: "#5BFB59 " }}
                >
                  <i
                    class="fas fa-shopping-basket"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp;Complete Orders
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{CompleteCount}</i>
                </b>
              </p>
              <br></br>
              <br></br>
              <hr></hr>
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="All Orders">
                  <Table
                    class="table table-bordered "
                    striped
                    style={{ width: "98%", margin: "10px", marginTop: "25px" }}
                  >
                    <thead>
                      <tr className="table-dark">
                        <th scope="col">Id</th>
                        <th scope="col">Product Name </th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delivery Area</th>
                        <th scope="col">Order Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((order, id) => {
                        return (
                          <>
                            <tr
                              style={{
                                borderStyle: "dotted",
                                fontSize: "15px",
                              }}
                            >
                              <th scope="row" style={{ borderStyle: "dotted" }}>
                                {id + 1}
                              </th>

                              <td style={{ borderStyle: "dotted" }}>
                                <a
                                  href={`/oitem/employee/${order._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  {order.product_name}
                                </a>
                              </td>
                              <td style={{ borderStyle: "dotted" }}>
                                <a
                                  href={`/oitem/employee/${order._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  {order.quantity}
                                </a>
                              </td>
                              <td style={{ borderStyle: "dotted" }}>
                                {order.delivery_area}
                              </td>

                              <td
                                style={{ borderStyle: "dotted" }}
                                color="success"
                                pill
                              >
                                <Button
                                  status={order.orderStatus}
                                  style={{ width: "10px", float: "left" }}
                                />
                              </td>
                              <td>
                                <a
                                  href={`/order/admin/${order._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  See More
                                </a>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                  <br></br>
                </Tab>
                <Tab eventKey="profile" title="Order Report">
                  <OrderReport/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div><br></br>
      </div>
    </div>
  );
}

export default Order;
