import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Layout/Sidebar";
import { Table } from "react-bootstrap";

function AllContact() {
    const [contact, setcontact] = useState([]);
  console.log(contact);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getcontact();
  }, [id]);
  const getcontact = () => {
    axios
      .get("http://localhost:8000/Allcontact")
      .then((res) => {
        setcontact(res.data);
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
  function Button({ status }) {
    return (
      <p
        style={{
          color: status === "Unread" ? "#FC8900" : "green",
          backgroundColor: status === "Unread" ? "#FCC98C " : "#8EFF94",
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
              All Messages
            </p>
            <hr></hr>
            <div>
            <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ backgroundColor: "#B666D2" }}
                >
                  <i
                    class="far fa-comment-dots"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp; All Messages
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact_Count}</i>
                </b>
              </p>

              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ marginLeft: "22%", backgroundColor: "#5BFB59 " }}
                >
                  <i
                    class="far fa-comment-dots"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp;Unread Messages
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{1}</i>
                </b>
              </p>

              <p className="p-main-card">
                <button
                  className="btn-main-card"
                  style={{ marginLeft: "22%", backgroundColor: "#FF5D5D " }}
                >
                  <i
                    class="far fa-comment-dots"
                    style={{
                      fontSize: "20px",
                      marginLeft: "0px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </p>
              <p style={{ fontSize: "15px", float: "left" }}>
                &nbsp;&nbsp;&nbsp;Read Messages
                <br />
                <b>
                  <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{1}</i>
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
                    <th scope="col">Subject </th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {contact.map((contact, id) => {
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

                          <td style={{ borderStyle: "dotted" }}>{contact.subject}</td>
                          <td style={{ borderStyle: "dotted" }}>
                          <Button
                                  status={contact.status}
                                  style={{ width: "10px", float: "left" }}
                                />
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                          <a
                                  href={`/contact/admin/${contact._id}`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllContact
