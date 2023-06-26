import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "react-bootstrap/Card";

function Random() {
  const [oitems, setoitems] = useState([]);
  console.log(oitems);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOitems();
  }, [id]);
  const getOitems = () => {
    axios
      .get("http://localhost:8000/random")
      .then((res) => {
        setoitems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      {oitems?.map((oitems, id) => {
        return (
          <>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant="top"
                src={`/uploads/${oitems.image}`}
                style={{ width: "100%", height: "170px" }}
              />

              <Card.Body>
                <Card.Title>
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
            <br></br>
          </>
        );
      })}
      <></>
    </div>
  );
}

export default Random;
