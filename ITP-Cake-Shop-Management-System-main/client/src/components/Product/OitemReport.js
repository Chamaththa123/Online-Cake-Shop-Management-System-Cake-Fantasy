import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import logo from "../../images/logo.png";

function OitemReport() {
  const [oitems, setoitems] = useState([]);
  console.log(oitems);

  useEffect(() => {
    function getOitems() {
      axios
        .get("http://localhost:8000/")
        .then((res) => {
          setoitems(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getOitems();
  }, []);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [oitemsCount, setoitemsCount] = useState([]);
  useEffect(() => {
    getOitemsCount();
  });
  const getOitemsCount = () => {
    axios
      .get("http://localhost:8000/All_Oitem")
      .then((res) => {
        setoitemsCount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [oitemsIn_StockCount, setoitemsIn_StockCount] = useState([]);
  useEffect(() => {
    getOitemsIn_StockCount();
  });
  const getOitemsIn_StockCount = () => {
    axios
      .get("http://localhost:8000/In_Stock")
      .then((res) => {
        setoitemsIn_StockCount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [oitemsOut_Of_StockCount, setoitemsOut_Of_StockCount] = useState([]);
  useEffect(() => {
    getOitemsOut_Of_StockCount();
  });
  const getOitemsOut_Of_StockCount = () => {
    axios
      .get("http://localhost:8000/Out_Of_Stock")
      .then((res) => {
        setoitemsOut_Of_StockCount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
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
          <p style={{ fontWeight: "500" }}>Other Item Report</p>
          <p style={{ marginTop: "-10px", fontWeight: "500" }}>
            Date:&nbsp;&nbsp;{date}
          </p>
          <br></br>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#198AD8 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;All Other Item - {oitemsCount}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#51FF40 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;In Stock Other Item - {oitemsIn_StockCount}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#FF4040 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;Out Of Stock Other Item - {oitemsOut_Of_StockCount}
          </p>

          <Table
            class="table table-bordered "
            striped
            style={{ width: "95%", height: "auto" }}
          >
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>

                <th scope="col">Item Code</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Category</th>
                <th scope="col">Rating</th>
                <th scope="col">Status</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {oitems.map((oitems, id) => {
                return (
                  <>
                    <tr style={{ fontSize: "15px" }}>
                      <th scope="row" style={{ borderStyle: "dotted" }}>
                        {id + 1}
                      </th>

                      <td style={{ borderStyle: "dotted" }}>
                        {oitems.item_code}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                        {oitems.item_name}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                        {oitems.category}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                        <Rating
                          style={{ fontSize: "17px", marginLeft: "7px" }}
                          name="half-rating-read"
                          defaultValue={oitems.avgRating}
                          precision={0.5}
                          readOnly
                        />
                      </td>
                      <td
                        style={{ borderStyle: "dotted" }}
                        color="success"
                        pill
                      >
                        {oitems.status}
                      </td>
                      <td style={{ borderStyle: "dotted" }}>
                        Rs.{oitems.price?.toFixed(2)}
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
  );
}

export default OitemReport;
