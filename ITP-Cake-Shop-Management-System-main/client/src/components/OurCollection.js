import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";

const OurCollection = () => {
  const [oitems, setoitems] = useState([]);
  console.log(oitems);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOitems();
  }, [id]);
  const getOitems = () => {
    axios
      .get("http://localhost:8000/b'day")
      .then((res) => {
        setoitems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [flower, setflower] = useState([]);
  console.log(flower);

  useEffect(() => {
    getFlower();
  }, [id]);
  const getFlower = () => {
    axios
      .get("http://localhost:8000/Flowers")
      .then((res) => {
        setflower(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <hr style={{ marginTop: "-10px" }}></hr>
      <div className="collection">
        <h3>Birthday Cakes</h3>
        {oitems?.map((oitems, id) => {
          return (
            <>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={`/uploads/${oitems.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={oitems.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${oitems._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {oitems.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{oitems.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>
      <div className="collection">
        <h3>Flowers</h3>
        {flower?.map((flower, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${flower.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={oitems.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${flower._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {flower.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{flower.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <Footer />
    </div>
  );
};

export default OurCollection;
