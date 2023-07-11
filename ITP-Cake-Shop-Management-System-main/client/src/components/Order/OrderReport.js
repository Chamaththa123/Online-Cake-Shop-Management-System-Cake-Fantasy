import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import logo from "../../images/logo.png";
function OrderReport() {
    const [order, setorder] = useState([]);
  console.log(order);


  useEffect(() => {
    getOrders();
  }, []);
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

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <button
        class="button"
        onClick={handlePrint}
        style={{
          width: "180px",
          marginLeft: "2%",
          height: "43px",
          marginTop: "20px",
          backgroundColor: "#1FC00F",
        }}
      >
        <span>Download Report</span>
      </button>
      <div className="mt-5" ref={componentRef}>
        <div style={{ paddingLeft: "40px" }}>
          <center>
            <table>
              <tr>
                <td>
                  <img
                    src={logo}
                    alt="Item"
                    style={{ width: "150px", height: "150px" }}
                  />
                </td>
                <td style={{ paddingTop: "40px" }}>
                  <p className="reportheader">Cake Fantosy (PVT) Ltd</p>
                  <p className="reportheader">
                    No 374, Highlevel Road,Gangodawila,Nugegoda.
                  </p>
                  <p className="reportheader">+94 71 212 8888</p>
                </td>
              </tr>
            </table>
          </center>
          <p style={{ fontWeight: "500" }}>Order Report</p>
          <p style={{ marginTop: "-10px", fontWeight: "500" }}>
            Date:&nbsp;&nbsp;{date}
          </p>
          <br></br>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#198AD8 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;All Orders - {order_Count}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#51FF40 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;Complete Orders - {CompleteCount}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#FF4040 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;Processing Orders - {ProcessingCount}
          </p>

          <Table
            class="table table-bordered "
            striped
            style={{ width: "95%", height: "auto" }}
          >
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Product</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Shipping</th>
                <th scope="col">Total</th>
                <th scope="col">Payement</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
               {order.map((order, id) => {
                return (
                  <>
                    <tr style={{ fontSize: "15px" }}>
                      <th scope="row" style={{ borderStyle: "dotted" }}>
                        {id + 1}
                      </th>

                      <td style={{ borderStyle: "dotted" }}>
                        {order.product_name}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                      Rs.{order.unit_price.toFixed(2)}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                        {order.quantity}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                        Rs.{order.shipping.toFixed(2)}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                      Rs.{order.total.toFixed(2)}
                      </td>
                      <td
                        style={{ borderStyle: "dotted" }}
                        color="success"
                        pill
                      >
                        {order.payment}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                      {order.orderStatus}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                      {order.orderStatus}
                      </td>
                      
                    </tr>
                  </>
                );
              })} 
            </tbody>
          </Table>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default OrderReport
