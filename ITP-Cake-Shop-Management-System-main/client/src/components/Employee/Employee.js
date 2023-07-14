import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Layout/Sidebar";
import { Table } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddEmployee from "./AddEmployee";

function Employee() {
    const [user, setuser] = useState([]);
  console.log(user);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getuser();
  }, [id]);
  const getuser = () => {
    axios
      .get("http://localhost:8000/employee")
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [user_Count, setuser_Count] = useState([]);
  useEffect(() => {
    getuser_Count();
  }, []);
  const getuser_Count = () => {
    axios
      .get("http://localhost:8000/empCount")
      .then((res) => {
        setuser_Count(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  function Button({ status }) {
   
    
    return (
      <p
        style={{
          color: status === 0 ? "red" : "green",
          backgroundColor: status === 0 ? "#FFBEBE " : "#8EFF94",
          value: status === 0 ? "ada" : "sacsac",
          width: "100px",
          borderRadius: "16px",
          height: "22px",
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
       {status ===0 ? 'Deny' : 'Allow'}
      </p>)}
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
              All Employees
            </p>
            <hr></hr>
            <div>
              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ backgroundColor: "#B666D2" }}
                >
                  <i
                    class="fas fa-users"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp; All Employees
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user_Count}</i>
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
                <Tab eventKey="home" title="All Employees">

                <Table
                class="table table-bordered "
                striped
                style={{ width: "98%", margin: "10px", marginTop: "25px" }}
              >
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Employee Name </th>
                    <th scope="col">Employee Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">System Access</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user, id) => {
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

                          <td style={{ borderStyle: "dotted" }}>{user.name}</td>
                          <td style={{ borderStyle: "dotted" }}>
                            {user.email}
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                            {user.phone}
                          </td>

                          <td style={{ borderStyle: "dotted" }}>
                            <Button
                                  status={user.role}
                                  style={{ width: "10px", float: "left" }}
                                />
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                          <a
                                  href={`/Emp/${user._id}`}
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

                    </Tab>
                    <Tab eventKey="profile" title="Add New Employee">
                        <AddEmployee/>
                    </Tab>
                </Tabs>
              
              <br></br>


              </div>
          </div>
          </div> 
      
      </div>
    </div>
  )
}

export default Employee
