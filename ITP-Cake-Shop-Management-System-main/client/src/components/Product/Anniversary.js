import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Card from "react-bootstrap/Card";
import Header from "../Layout/Header";
import Rating from "@mui/material/Rating";
import Footer from "../Layout/Footer";

function Anniversary() {
  const [oitems, setoitems] = useState([]);
  console.log(oitems);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOitems();
  }, [id]);
  const getOitems = () => {
    axios
      .get("http://localhost:8000/AllAnniversaryCake")
      .then((res) => {
        setoitems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(200000);
  const [search, setSearch] = useState("");
  const filteredItems = oitems.filter(
    (item) => item.price >= minValue && item.price <= maxValue
  );

  const searchItem = filteredItems.filter((oitems) => {
    if (search === "") {
      return oitems;
    } else if (
      oitems.item_name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      oitems.item_code.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return oitems;
    }
  });
  return (
    <div>
      <Header />
      <hr style={{ marginTop: "-10px" }}></hr>

      <div>
        <center>
          {" "}
          <h2 style={{ color: "#910AC1" }}>Anniversary Cakes</h2>
        </center>
        <br></br>
        <table>
          <tr>
            <td style={{ paddingLeft: "40px", width: "855px" }}>
              <MDBInput
                className="mt-2 bg-white"
                placeholder="Search Other Item..."
                style={{ width: "30%", borderRadius: "20px", float: "left" }}
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
                <i
                  class="fa fa-search"
                  style={{ color: "white", marginLeft: "-7px" }}
                ></i>
              </button>
            </td>

            <td style={{ width: "120px" }}>
              <button
                style={{
                  backgroundColor: "#B666D2",
                  border: "none",
                  borderRadius: "10px",
                  width: "100px",
                  color: "white",
                }}
              >
                Rs.{minValue.toFixed(2)}
              </button>
            </td>
            <td style={{ width: "200px" }}>
              <InputRange
                minValue={0}
                maxValue={200000}
                value={{ min: minValue, max: maxValue }}
                onChange={(value) => {
                  setMinValue(value.min);
                  setMaxValue(value.max);
                }}
                style={{ color: "red", float: "left" }}
              />
            </td>
            <td style={{ width: "120px" }}>
              <button
                style={{
                  backgroundColor: "#B666D2",
                  border: "none",
                  borderRadius: "10px",
                  marginLeft: "20px",
                  width: "100px",
                  color: "white",
                }}
              >
                Rs.{maxValue.toFixed(2)}
              </button>
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <div className="HomeCollection">
        {searchItem?.map((oitems, id) => {
          return (
            <>
              <Card
                style={{
                  width: "201px",
                  float: "left",
                  marginRight: "12px",
                  marginBottom: "10px",
                }}
              >
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
      <Footer />
    </div>
  );
}

export default Anniversary;
