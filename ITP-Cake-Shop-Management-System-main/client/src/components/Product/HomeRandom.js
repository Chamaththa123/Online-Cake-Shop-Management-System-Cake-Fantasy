import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";

function HomeRandom() {

    const [oitems, setoitems] = useState([]);
  console.log(oitems);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOitems();
  }, [id]);
  const getOitems = () => {
    axios
      .get("http://localhost:8000/HomeRandom")
      .then((res) => {
        setoitems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="HomeCollection">
        
        {oitems?.map((oitems, id) => {
          return (
            <>
              <Card style={{ width: "201px" ,float:'left',marginRight:'12px',marginBottom:'10px'}}>
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
                  <Card.Text>Rs.{oitems.price?.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>
    </div>
  )
}

export default HomeRandom
