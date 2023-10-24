import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import AddProduct from "./AddProduct";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Table } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";
import OitemReport from "./OitemReport";
import '../../components/Sidebar.css';
import logo from '../../images/logo.png';
import product from '../../images/cake.png';
import AdminHeader from "../Layout/AdminHeader";
import In_Stock from '../../images/in-stock.png';
import Out_Of_Stock from '../../images/out-of-stock.png';

function Product() {
  const [oitems, setoitems] = useState([]);
  console.log(oitems);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOitems();
  }, [id]);
  const getOitems = () => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setoitems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [search, setSearch] = useState("");
  const searchItem = oitems.filter((oitems) => {
    if (search === "") {
      return oitems;
    } else if (
      oitems.item_name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      oitems.item_code.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return oitems;
    }
  });

  function Button({ status }) {
    return (
      <p
        style={{
          color: status === "Out Of Stock" ? "red" : "green",
          backgroundColor: status === "Out Of Stock" ? "#FFBEBE " : "#8EFF94",
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

  const [oitems_Count, setoitems_Count] = useState([]);
  useEffect(() => {
    getoitems_Count();
  }, []);
  const getoitems_Count = () => {
    axios
      .get("http://localhost:8000/All_Oitem")
      .then((res) => {
        setoitems_Count(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [oitemsIn_StockCount, setoitemsIn_StockCount] = useState([]);
  useEffect(() => {
    getOitemsIn_StockCount();
  }, []);
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

  const [oitemsOut_StockCount, setoitemsOut_StockCount] = useState([]);
  useEffect(() => {
    getOitemsOut_StockCount();
  }, []);
  const getOitemsOut_StockCount = () => {
    axios
      .get("http://localhost:8000/Out_Of_Stock")
      .then((res) => {
        setoitemsOut_StockCount(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div className="content">
        <div className="sidenav">
          <div>
            <center> <img src={logo} className='logo' alt='logo' /></center>
          </div>
          <a href="/dashboard/admin">DashBoard</a>
          <a href="/Product" className="active1">Products</a>
          <a href="#clients">Orders</a>
          <a href="#clients">Custom Orders</a>
          <a href="#contact">Inventory</a>
          <a href="#contact">Messages</a>
          <a href="#contact">Customers</a>
          <a href="#contact">Employees</a>
        </div>
        <div className="main">
          <AdminHeader />
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <p
              className="p-main-card"
              style={{ fontSize: "30px", fontWeight: "500" }}
            >
              <img src={product}  alt='logo' style={{width:'40px',marginTop:'-12px'}}/>&nbsp;&nbsp;All Products
            </p>
           
            <div>
              
            <Card style={{ width: '20rem', float: 'left', marginLeft: '3.5rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><img src={product} alt='logo' style={{ width: '40px' }} /> &nbsp;&nbsp;<c style={{ color: "#09217B ", fontSize: "18px" }}> All Produts</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; {oitems_Count}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><img src={In_Stock} alt='logo' style={{ width: '40px' }} /> &nbsp;&nbsp;<c style={{ color: "#097B21 ", fontSize: "18px" }}> In Stock </c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {oitemsIn_StockCount}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><img src={Out_Of_Stock} alt='logo' style={{ width: '40px' }} /> &nbsp;&nbsp;<c style={{ color: "#CB0B0B ", fontSize: "18px" }}> Out of Stock </c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oitemsOut_StockCount}</Card.Title>

              </Card.Body>
            </Card>
<br/>
<br/>
<br/>
<br/>
<br/>
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="All Products">
                  <MDBInput
                    className="mt-2 bg-white"
                    placeholder="Search Product..."
                    style={{
                      width: "25%",
                      borderRadius: "20px",
                      float: "left",
                      marginLeft: "74%",
                    }}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  <button
                    style={{
                      marginTop: "12px",
                      marginLeft: "-35px",
                      borderRadius: "50%",
                      backgroundColor: "#B666D2 ",
                      border: "none",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <i
                      class="fa fa-search"
                      style={{ color: "white", marginLeft: "-7.5px" }}
                    ></i>
                  </button>

                  <Table
                    class="table table-bordered "
                    striped
                    style={{ width: "98%", margin: "10px", marginTop: "25px" }}
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
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchItem.map((oitems, id) => {
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
                                  href={`/oitem/employee/${oitems._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  {oitems.item_code}
                                </a>
                              </td>
                              <td style={{ borderStyle: "dotted" }}>
                                <a
                                  href={`/oitem/employee/${oitems._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  {oitems.item_name}
                                </a>
                              </td>
                              <td style={{ borderStyle: "dotted" }}>
                                {oitems.category}
                              </td>
                              <td style={{ borderStyle: "dotted" }}>
                                <Rating
                                  style={{
                                    fontSize: "17px",
                                    marginLeft: "7px",
                                  }}
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
                                <Button
                                  status={oitems.status}
                                  style={{ width: "10px", float: "left" }}
                                />
                              </td>
                              <td style={{ borderStyle: "dotted" }}>
                                Rs.{oitems.price?.toFixed(2)}
                              </td>
                              <td>
                                <a
                                  href={`/product/admin/${oitems._id}`}
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
                <Tab eventKey="profile" title="Add New Product">
                  <AddProduct />
                </Tab>
                <Tab eventKey="profile1" title="Product Report">
                  <OitemReport />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div><br></br>
      </div>
    </div>
  );
}

export default Product;
