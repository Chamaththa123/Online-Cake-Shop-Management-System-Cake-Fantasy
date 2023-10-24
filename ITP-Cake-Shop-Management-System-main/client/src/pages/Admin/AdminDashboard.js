import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Sidebar from "../../components/Layout/Sidebar";
import Card from 'react-bootstrap/Card';
import { Chart } from 'react-charts'
import AdminHeader from "../../components/Layout/AdminHeader";
import '../../components/Sidebar.css';
import logo from '../../images/logo.png';
const AdminDashboard = () => {
  const [auth] = useAuth();

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

  const [contact_Count, setcontact_Count] = useState([]);
  useEffect(() => {
    getcontact_Count();
  }, []);
  const getcontact_Count = () => {
    axios
      .get("http://localhost:8000/ContactCount")
      .then((res) => {
        setcontact_Count(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [R_contact_Count, setRcontact_Count] = useState([]);
  useEffect(() => {
    getRcontact_Count();
  }, []);
  const getRcontact_Count = () => {
    axios
      .get("http://localhost:8000/ReadContactCount")
      .then((res) => {
        setRcontact_Count(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [UR_contact_Count, setURcontact_Count] = useState([]);
  useEffect(() => {
    getURcontact_Count();
  }, []);
  const getURcontact_Count = () => {
    axios
      .get("http://localhost:8000/UnreadContactCount")
      .then((res) => {
        setURcontact_Count(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  return (
    <Layout>
      <div>
      <div className="sidenav">
        <div>
         <center> <img src={logo} className='logo' alt='logo'/></center>
        </div>
        <a href="#" className="active1">DashBoard</a>
        <a href="/Product">Products</a>
        <a href="#clients">Orders</a>
        <a href="#clients">Custom Orders</a>
        <a href="#contact">Inventory</a>
        <a href="#contact">Messages</a>
        <a href="#contact">Customers</a>
        <a href="#contact">Employees</a>
      </div>
        <div className="main">
          <AdminHeader />
          <br />
          <br />
          <br />
          <div className="main-card">
            <Card style={{ width: '20rem', float: 'left', marginLeft: '3.5rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#198AD8 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#09217B ", fontSize: "18px" }}> All Produts</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {oitemsCount}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#51FF40 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#097B21 ", fontSize: "18px" }}> In Stock Products</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {oitemsIn_StockCount}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#FF4040 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#CB0B0B ", fontSize: "18px" }}> Out of Stock Products</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{oitemsOut_Of_StockCount}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '3.5rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#198AD8 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#09217B ", fontSize: "18px" }}> All Orders</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {order_Count}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#51FF40 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#097B21 ", fontSize: "18px" }}> Complete Orders</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {CompleteCount}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#FF4040 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#CB0B0B ", fontSize: "18px" }}> Processing Orders</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ProcessingCount}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '3.5rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#198AD8 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#09217B ", fontSize: "18px" }}> All Messages</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {contact_Count}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#51FF40 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#097B21 ", fontSize: "18px" }}> Unread Messages</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {UR_contact_Count}</Card.Title>

              </Card.Body>
            </Card>

            <Card style={{ width: '20rem', float: 'left', marginLeft: '1rem', marginTop: '1rem' }}>
              <Card.Body>
                <Card.Title><i
                  class="fas fa-circle"
                  style={{ color: "#FF4040 ", fontSize: "15px" }}
                ></i> <c style={{ color: "#CB0B0B ", fontSize: "18px" }}> Read Messages</c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{R_contact_Count}</Card.Title>

              </Card.Body>
            </Card>


          </div>
          <br></br>
        </div>
      </div>

    </Layout>
  );
};

export default AdminDashboard;