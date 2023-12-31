import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import "../../css.css";
import { FaStar } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AdminReview from "../Review/AdminReview";

const colors = {
  orange: "#FEB902",
  grey: "#D4D1D0",
};

function OitemDetails_A() {
  const id = useParams().id;
  console.log(id);

  const [inputs, setInput] = useState({});

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8000/oitem/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.oitem));
    };
    fetchHandler();
  }, [id]);

  function Button({ status }) {
    return (
      <p
        style={{
          color: status === "Unavailable" ? "red" : "white",
          backgroundColor: status === "Unavailable" ? "#FFBEBE " : "white",
          width: "100px",
          borderRadius: "16px",
          height: "22px",
          paddingBottom: "4px",
          paddingLeft: "10px",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Out Of Stock
      </p>
    );
  }

  const history = useNavigate();
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/oitem/delete/${id}`)
      .then((res) => res.data)
      .then(() => history("/Product"), alert("Item Deleted!!!"));
  };
  const stars = Array(5).fill(0);
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
              Product Details of {inputs.item_code}
            </p>
            <div className="row">
              <div class="product-column">
                <p>
                  <img
                    src={`/uploads/${inputs.image}`}
                    alt="ss"
                    style={{ width: "380px", height: "360px" }}
                    className="img"
                  />
                </p>
              </div>
              <div class="product-column2">
                <div>
                  <br></br>
                  <h3>{inputs.item_name}</h3>
                  <br></br>
                  <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                    <c style={{ fontWeight: "500" }}>
                      {inputs.item_code} - {inputs.category}
                    </c>{" "}
                    By Cake Factasy
                  </p>
                  <div style={styles.stars}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          size={15}
                          precision={0.05}
                          color={
                            inputs.avgRating?.toFixed(0) > index
                              ? colors.orange
                              : colors.grey
                          }
                        />
                      );
                    })}
                    <c style={{ marginTop: "-3px", fontSize: "13px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;{inputs.numReviews} Ratings
                    </c>
                  </div>

                  <h4
                    style={{
                      color: "#B666D2 ",
                      marginTop: "20px",
                      marginBottom: "-20px",
                    }}
                  >
                    {" "}
                    <b>Rs.{inputs.price?.toFixed(2)}</b>
                  </h4>
                  <br />
                  <Button
                    status={inputs.status}
                    style={{ width: "10px", float: "left" }}
                  />
                </div>
                <br></br>

                <a href={`/product/admin/update/${inputs._id}`}>
                  {" "}
                  <button
                    style={{
                      borderRadius: "5px",
                      height: "40px",
                      color: "white",
                      backgroundColor: "#FAB200 ",
                      border: "none",
                    }}
                  >
                    &nbsp;&nbsp;<i class="fas fa-edit"></i> &nbsp;Edit
                    Details&nbsp;&nbsp;
                  </button>
                </a>
                <button
                  onClick={deleteHandler}
                  style={{
                    marginLeft: "50px",
                    borderRadius: "5px",
                    height: "40px",
                    color: "white",
                    backgroundColor: "#FF3737 ",
                    border: "none",
                  }}
                >
                  &nbsp;&nbsp;<i class="fas fa-trash-alt"></i> &nbsp;Delete
                  Item&nbsp;&nbsp;
                </button>
              </div>
            </div>
            <div>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                style={{ margin: "20px", marginLeft: "20px" }}
              >
                <Tab eventKey="profile" title="Description" style={{ margin: "20px", marginLeft: "20px"}}>
                  <p className="description">
                    {inputs.description1}
                    <br></br><br></br>
                    <strong>{inputs.description2}</strong>
                    <br></br><br></br>
                    <p style={{ color: "red" }}>{inputs.description3}</p>
                    <br></br>
                  </p>
                </Tab>
                <Tab
                  eventKey="home"
                  title={`Customer Reviews (${inputs.numReviews})`}
                  style={{ margin: "20px" }}
                >
                  <AdminReview/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OitemDetails_A;

const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
    Animationdelay: "4s",
  },
};
