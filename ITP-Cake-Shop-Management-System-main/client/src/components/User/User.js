import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Layout/Sidebar";
import { Table } from "react-bootstrap";

function User() {
  const [user, setuser] = useState([]);
  console.log(user);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getuser();
  }, [id]);
  const getuser = () => {
    axios
      .get("http://localhost:8000/users")
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
      .get("http://localhost:8000/UserCount")
      .then((res) => {
        setuser_Count(res.data);
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
              All Customers
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
                &nbsp;&nbsp;&nbsp; All Customers
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user_Count}</i>
                </b>
              </p>

              
              <br></br>
              <br></br>
              <hr></hr>
              <Table
                class="table table-bordered "
                striped
                style={{ width: "98%", margin: "10px", marginTop: "25px" }}
              >
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Id</th>
                    <th scope="col">Customer Name </th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
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
                            {user.address}
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
      </div>
    </div>
  );
}

export default User;
