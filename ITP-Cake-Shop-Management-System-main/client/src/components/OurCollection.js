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

  const [cartoon, setcartoon] = useState([]);
  console.log(cartoon);

  useEffect(() => {
    getcartoon();
  }, [id]);
  const getcartoon = () => {
    axios
      .get("http://localhost:8000/CartoonCake")
      .then((res) => {
        setcartoon(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [wedding, setwedding] = useState([]);
  console.log(wedding);

  useEffect(() => {
    getwedding();
  }, [id]);
  const getwedding = () => {
    axios
      .get("http://localhost:8000/WeddingCake")
      .then((res) => {
        setwedding(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [print, setprint] = useState([]);
  console.log(print);

  useEffect(() => {
    getprint();
  }, [id]);
  const getprint = () => {
    axios
      .get("http://localhost:8000/PrintCake")
      .then((res) => {
        setprint(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [cup, setcup] = useState([]);
  console.log(cup);

  useEffect(() => {
    getcup();
  }, [id]);
  const getcup = () => {
    axios
      .get("http://localhost:8000/CupCake")
      .then((res) => {
        setcup(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [kids, setkids] = useState([]);
  console.log(kids);

  useEffect(() => {
    getkids();
  }, [id]);
  const getkids = () => {
    axios
      .get("http://localhost:8000/KidsCake")
      .then((res) => {
        setkids(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [icing, seticing] = useState([]);
  console.log(icing);

  useEffect(() => {
    geticing();
  }, [id]);
  const geticing = () => {
    axios
      .get("http://localhost:8000/IcingCake")
      .then((res) => {
        seticing(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [Anniversary, setAnniversary] = useState([]);
  console.log(Anniversary);

  useEffect(() => {
    getAnniversary();
  }, [id]);
  const getAnniversary = () => {
    axios
      .get("http://localhost:8000/AnniversaryCake")
      .then((res) => {
        setAnniversary(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [Chocolate, setChocolate] = useState([]);
  console.log(Chocolate);

  useEffect(() => {
    getChocolate();
  }, [id]);
  const getChocolate = () => {
    axios
      .get("http://localhost:8000/Chocolate")
      .then((res) => {
        setChocolate(res.data);
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
                  defaultValue={flower.avgRating}
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

      <div className="collection">
        <h3>Cartoon Cakes</h3>
        {cartoon?.map((cartoon, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${cartoon.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={cartoon.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${cartoon._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {cartoon.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{cartoon.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Wedding Cakes</h3>
        {wedding?.map((wedding, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${wedding.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={wedding.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${wedding._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {wedding.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{wedding.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Print Cakes</h3>
        {print?.map((print, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${print.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={print.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${print._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {print.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{print.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Cup Cakes</h3>
        {cup?.map((cup, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${cup.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={cup.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${cup._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {cup.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{cup.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Kids Cakes</h3>
        {kids?.map((kids, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${kids.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={kids.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${kids._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {kids.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{kids.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Icing Cakes</h3>
        {icing?.map((icing, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${icing.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={icing.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${icing._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {icing.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{icing.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Anniversary Cakes</h3>
        {Anniversary?.map((Anniversary, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${Anniversary.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={Anniversary.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${Anniversary._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {Anniversary.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{Anniversary.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
        <></>
      </div>

      <div className="collection">
        <h3>Chocolate</h3>
        {Chocolate?.map((Chocolate, id) => {
          return (
            <>
              <Card
                style={{ width: "14rem", float: "left", marginRight: "20px" }}
              >
                <Card.Img
                  variant="top"
                  src={`/uploads/${Chocolate.image}`}
                  style={{ width: "100%", height: "200px" }}
                />
                <Rating
                  style={{
                    fontSize: "17px",
                    marginTop: "-30px",
                    marginLeft: "15px",
                  }}
                  name="half-rating-read"
                  defaultValue={Chocolate.avgRating}
                  precision={0.5}
                  readOnly
                />
                <Card.Body>
                  <Card.Title className="limited">
                    <a
                      href={`/product/${Chocolate._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {Chocolate.item_name}
                    </a>
                  </Card.Title>
                  <Card.Text>Rs.{Chocolate.price.toFixed(2)}</Card.Text>
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
