import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../css.css";
import { FaStar } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Random from "./Random";
import Review from "../Review/Review";

const colors = {
  orange: "#FEB902",
  grey: "#D4D1D0",
};

function Oitemdetails_C() {
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

  const stars = Array(5).fill(0);
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <hr style={{ marginTop: "-10px" }}></hr>
      <div className="product-column5">
        <div className="product-column3">
          <img
            src={`/uploads/${inputs.image}`}
            alt="ss"
            style={{ width: "380px", height: "360px", marginLeft: "70px" }}
            className="img"
          />
        </div>
        <div className="product-column4">
          <h2>{inputs.item_name}</h2>
          <p>{inputs.item_code} By Cake fantasy</p>
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
          <br></br>
          <p style={{ fontSize: "40px" }}>Rs.{inputs.price?.toFixed(2)}</p>
          <a href={`/Product/${inputs._id}/Order`}>
            <button className="buy-now">BUY NOW</button>
          </a>
        </div>

        <div
          style={{
            backgroundColor: "white",
            marginTop: "409px",
            marginLeft: "60px",
            width: "90%",
          }}
        >
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{ margin: "20px", marginLeft: "20px" }}
          >
            <Tab
              eventKey="profile"
              title="Description"
              style={{ margin: "20px", marginLeft: "20px" }}
            >
              <p className="description">
                {inputs.description1}
                <br></br>
                <br></br>
                <strong>{inputs.description2}</strong>
                <br></br>
                <br></br>
                <p style={{ color: "red" }}>{inputs.description3}</p>
              </p>
            </Tab>
            <Tab
              eventKey="home"
              title={`Customer Reviews (${inputs.numReviews})`}
              style={{ margin: "20px" }}
            >
              <Review/>
            </Tab>
          </Tabs>
          <br></br>
        </div>
      </div>
      <div className="product-column6">
        <Random />
      </div>
      <Footer />
    </div>
  );
}

export default Oitemdetails_C;
const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
    Animationdelay: "4s",
  },
};
