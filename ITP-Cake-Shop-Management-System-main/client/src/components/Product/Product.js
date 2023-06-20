import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/Layout/Sidebar'
import AddProduct from './AddProduct'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Table } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import Rating from "@mui/material/Rating";

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
      <div className='content' >
      <Sidebar/>
      <div className='main'>
<br></br>
        

        <div className='main-card'>
        <p className='p-main-card' style={{fontSize:'30px',fontWeight:'500',}}>All Products</p>
        <hr></hr>
        <div>
          <p className='p-main-card'><button className='btn-main-card' style={{backgroundColor:'#B666D2'}}><i class="fa fa-birthday-cake" style={{fontSize:'20px',marginLeft:'0px',color:'white'}}></i></button></p>
        <p style={{fontSize:'15px',float:'left'}}>&nbsp;&nbsp;&nbsp; All Cake Products<br/><b><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oitems_Count}</i></b></p>


        <p className='p-main-card'><button className='btn-main-card' style={{marginLeft:'22%',backgroundColor:'#5BFB59 '}}><i class="fa fa-birthday-cake" style={{fontSize:'20px',marginLeft:'0px',color:'white'}}></i></button></p>
        <p style={{fontSize:'15px',float:'left'}}>&nbsp;&nbsp;&nbsp;In Stock Products<br/><b><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oitemsIn_StockCount}</i></b></p>

        <p className='p-main-card'><button className='btn-main-card' style={{marginLeft:'22%',backgroundColor:'#FF5D5D '}}><i class="fa fa-birthday-cake" style={{fontSize:'20px',marginLeft:'0px',color:'white'}}></i></button></p>
        <p style={{fontSize:'15px',float:'left'}}>&nbsp;&nbsp;&nbsp;Out of Stock Products<br/><b><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oitemsOut_StockCount}</i></b></p><br></br>
        <br></br>
       <hr></hr>
        
       <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="All Products">
      <MDBInput
        className="mt-2 bg-white"
        placeholder="Search Other Item..."
        style={{
          width: "20%",
          borderRadius: "20px",
          float: "left",
          marginLeft: "64%",
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
        <i class="fa fa-search" style={{ color: "white" }}></i>
      </button>
      <Table
                class="table table-bordered "
                striped
                style={{ width: "98%" ,margin:'10px'}}
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
                        <tr style={{ borderStyle: "dotted", fontSize: "15px" }}>
                          <th scope="row" style={{ borderStyle: "dotted" }}>
                            {id + 1}
                          </th>

                          <td style={{ borderStyle: "dotted" }}>
                            <a
                              href={`/oitem/employee/${oitems._id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {oitems.item_code}
                            </a>
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                            <a
                              href={`/oitem/employee/${oitems._id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {oitems.item_name}
                            </a>
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
                            <Button
                              status={oitems.status}
                              style={{ width: "10px", float: "left" }}
                            />
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                            Rs.{oitems.price.toFixed(2)}
                          </td>
                        <td><a  href={`/product/admin/${oitems._id}`} style={{textDecoration:'none'}}>See More</a></td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
      </Tab>
      <Tab eventKey="profile" title="Add New Product">
      <AddProduct/>
      </Tab>
    </Tabs>

        
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product