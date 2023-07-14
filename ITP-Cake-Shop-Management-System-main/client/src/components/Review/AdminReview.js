import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";

function AdminReview() {
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

  const [review, setreview] = useState([]);
  console.log(review);

  useEffect(() => {
    getReviews();
  });

  const getReviews = () => {
    axios
      .get(`http://localhost:8000/oitem/${id}/reviews`)
      .then((res) => {
        setreview(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [count5Rating, setreviewcount5Rating] = useState([]);
  useEffect(() => {
    getCount5Rating();
  });

  const getCount5Rating = () => {
    axios
      .get(`http://localhost:8000/oitem/${id}/5reviewscount`)
      .then((res) => {
        setreviewcount5Rating(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [count4Rating, setreviewcount4Rating] = useState([]);
  useEffect(() => {
    getCount4Rating();
  });

  const getCount4Rating = () => {
    axios
      .get(`http://localhost:8000/oitem/${id}/4reviewscount`)
      .then((res) => {
        setreviewcount4Rating(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [count3Rating, setreviewcount3Rating] = useState([]);
  useEffect(() => {
    getCount3Rating();
  });

  const getCount3Rating = () => {
    axios
      .get(`http://localhost:8000/oitem/${id}/3reviewscount`)
      .then((res) => {
        setreviewcount3Rating(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [count2Rating, setreviewcount2Rating] = useState([]);
  useEffect(() => {
    getCount2Rating();
  });

  const getCount2Rating = () => {
    axios
      .get(`http://localhost:8000/oitem/${id}/2reviewscount`)
      .then((res) => {
        setreviewcount2Rating(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [count1Rating, setreviewcount1Rating] = useState([]);
  useEffect(() => {
    getCount1Rating();
  });

  const getCount1Rating = () => {
    axios
      .get(`http://localhost:8000/oitem/${id}/1reviewscount`)
      .then((res) => {
        setreviewcount1Rating(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={{ marginLeft: "30px" }}>
      <div className="columnRA1">
        <table class="table table-bordered" striped style={{ width: "80%" }}>
          <thead>
            <tr>
              <th>Autor</th>
              <th>Rating</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {review.map((review, id) => {
              return (
                <tr>
                  <td style={{ width: "200px" }}>{review.name}</td>
                  <td style={{ width: "20px" }}>
                    <Rating
                      style={{ fontSize: "17px" }}
                      name="half-rating-read"
                      defaultValue={review.rating}
                      precision={0.5}
                      readOnly
                    />
                  </td>
                  <td style={{ width: "550px" }}>{review.comment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="columnRA2">
        <p>
          <i class="fa fa-circle" style={{ color: "#0747B8" }}></i> All Reviews
          : &nbsp;&nbsp;&nbsp;{inputs.numReviews}
        </p>
        <p>
          <i class="fa fa-circle" style={{ color: "#0747B8" }}></i> Average
          Rating : &nbsp;&nbsp;&nbsp;{inputs.avgRating?.toFixed(1)}
        </p>
        <p>
          <span class="fa fa-star checked" style={{ color: "#07B82A" }} /> 5
          Star : &nbsp;&nbsp;&nbsp;{count5Rating}
        </p>
        <p>
          <span class="fa fa-star checked" style={{ color: "#00E831" }} /> 4
          Star : &nbsp;&nbsp;&nbsp;{count4Rating}
        </p>
        <p>
          <span class="fa fa-star checked" style={{ color: "#FEE700" }} /> 3
          Star : &nbsp;&nbsp;&nbsp;{count3Rating}
        </p>
        <p>
          <span class="fa fa-star checked" style={{ color: "#FE7F00" }} /> 2
          Star : &nbsp;&nbsp;&nbsp;{count2Rating}
        </p>
        <p>
          <span class="fa fa-star checked" style={{ color: "#CB0802" }} /> 1
          Star: &nbsp;&nbsp;&nbsp;{count1Rating}
        </p>
      </div>
    </div>
  );
}

export default AdminReview;
