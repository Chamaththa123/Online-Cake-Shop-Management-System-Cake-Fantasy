import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from '../../components/Layout/Sidebar'
import AddProduct from './AddProduct'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Product() {

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
        Tab content for Home
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