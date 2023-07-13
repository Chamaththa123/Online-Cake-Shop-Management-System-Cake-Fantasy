import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Sidebar from "../../components/Layout/Sidebar";
import Card from 'react-bootstrap/Card';
import { Chart } from 'react-charts'
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
      <div className="content">
        <Sidebar />
        <div className="main">
          <br></br>

          <div className="main-card">
          <Card style={{ width: '16rem' ,float:'left'}}>
      <Card.Body>
        <Card.Title>Products</Card.Title>
        <p>
            <i
              class="fas fa-circle"
              style={{ color: "#198AD8 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;All Products - {oitemsCount}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#51FF40 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;In Stock Products - {oitemsIn_StockCount}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#FF4040 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;Out of Stock Products- {oitemsOut_Of_StockCount}
          </p>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem' ,float:'left',marginLeft:'1rem'}}>
      <Card.Body>
        <Card.Title>Orders</Card.Title>
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
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem' ,float:'left',marginLeft:'1rem'}}>
      <Card.Body>
        <Card.Title>Messages</Card.Title>
        <p>
            <i
              class="fas fa-circle"
              style={{ color: "#198AD8 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;All Messages - {contact_Count}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#51FF40 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;Read Messages - {R_contact_Count}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#FF4040 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;UnRead Messages - {UR_contact_Count}
          </p>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '16rem' ,float:'left',marginLeft:'1rem'}}>
      <Card.Body>
        <Card.Title>Messages</Card.Title>
        <p>
            <i
              class="fas fa-circle"
              style={{ color: "#198AD8 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;All Messages - {contact_Count}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#51FF40 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;Read Messages - {R_contact_Count}
          </p>
          <p>
            <i
              class="fas fa-circle"
              style={{ color: "#FF4040 ", fontSize: "15px" }}
            ></i>
            &nbsp;&nbsp;UnRead Messages - {ProcessingCount}
          </p>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
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