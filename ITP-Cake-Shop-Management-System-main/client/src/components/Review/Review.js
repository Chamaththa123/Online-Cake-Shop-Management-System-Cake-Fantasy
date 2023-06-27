import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FEB902",
    grey: "#D4D1D0",
};

const Review = () => {
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
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

    const [inpval, setINP] = useState({
        product: "",
        name: "",
        rating: "",
        comment: "",
    });
    console.log(inpval);

    const setdata = (e) => {
        setINP((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const sendRequest = async () => {
        await axios
            .post(`http://localhost:8000/oitem/${id}/review`, {
                product: String(inpval.product),
                name: String(inpval.name),
                rating: Number(inpval.rating),
                comment: String(inpval.comment),
                date: String(date),

            })
            .then((res) => res.data);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inpval);
        sendRequest();
        handleClose();
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

    const stars = Array(5).fill(0);
    return (
        <div style={{ marginLeft: "0px" }}>
            <Card style={{ width: "100%" }}>
                <Card.Body>
                    <div className="column999">

                        <table style={{ margin: "10px" }}>
                            <tr>
                                <td style={{ width: "120px" }}>
                                    <Rating
                                        style={{ fontSize: "24px" }}
                                        name="half-rating-read"
                                        defaultValue={5}
                                        precision={0.5}
                                        readOnly
                                    />
                                </td>
                                <td style={{ width: "270px", paddingTop: "-14px", paddingLeft: '40px' }}>
                                    <ProgressBar
                                        now={((count5Rating / inputs.numReviews) * 100)?.toFixed(
                                            0
                                        )}
                                        variant="warning"
                                        style={{ borderRadius: "45px" }}
                                    />
                                </td>
                                <td style={{ paddingLeft: "35px" }}>{count5Rating}</td>
                            </tr>

                            <tr>
                                <td style={{ width: "120px" }}>
                                    <Rating
                                        style={{ fontSize: "24px" }}
                                        name="half-rating-read"
                                        defaultValue={4}
                                        precision={0.5}
                                        readOnly
                                    />
                                </td>
                                <td style={{ width: "270px", paddingTop: "-14px", paddingLeft: '40px' }}>
                                    <ProgressBar
                                        now={((count4Rating / inputs.numReviews) * 100)?.toFixed(
                                            0
                                        )}
                                        variant="warning"
                                        style={{ borderRadius: "45px" }}
                                    />
                                </td>
                                <td style={{ paddingLeft: "35px" }}>{count4Rating}</td>
                            </tr>

                            <tr>
                                <td style={{ width: "120px" }}>
                                    <Rating
                                        style={{ fontSize: "24px" }}
                                        name="half-rating-read"
                                        defaultValue={3}
                                        precision={0.5}
                                        readOnly
                                    />
                                </td>
                                <td style={{ width: "270px", paddingTop: "-14px", paddingLeft: '40px' }}>
                                    <ProgressBar
                                        now={((count3Rating / inputs.numReviews) * 100)?.toFixed(
                                            0
                                        )}
                                        variant="warning"
                                        style={{ borderRadius: "45px" }}
                                    />
                                </td>
                                <td style={{ paddingLeft: "35px" }}>{count3Rating}</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td style={{ width: "120px" }}>
                                    <Rating
                                        style={{ fontSize: "24px" }}
                                        name="half-rating-read"
                                        defaultValue={2}
                                        precision={0.5}
                                        readOnly
                                    />
                                </td>
                                <td style={{ width: "270px", paddingTop: "-14px", paddingLeft: '40px' }}>
                                    <ProgressBar
                                        now={((count2Rating / inputs.numReviews) * 100)?.toFixed(
                                            0
                                        )}
                                        variant="warning"
                                        style={{ borderRadius: "45px" }}
                                    />
                                </td>
                                <td style={{ paddingLeft: "35px" }}>{count2Rating}</td>
                            </tr>

                            <tr>
                                <td style={{ width: "120px" }}>
                                    <Rating
                                        style={{ fontSize: "24px" }}
                                        name="half-rating-read"
                                        defaultValue={1}
                                        precision={0.5}
                                        readOnly
                                    />
                                </td>
                                <td style={{ width: "270px", paddingTop: "-14px", paddingLeft: '40px' }}>
                                    <ProgressBar
                                        now={((count1Rating / inputs.numReviews) * 100)?.toFixed(
                                            0
                                        )}
                                        variant="warning"
                                        style={{ borderRadius: "45px" }}
                                    />
                                </td>
                                <td style={{ paddingLeft: "35px" }}>{count1Rating}</td>
                            </tr>
                        </table>

                    </div>
                    <div className="column1000">
                        <center>
                            <table>
                                <tr>
                                    <td style={{ fontSize: "35px", fontWeight: "600" }}>
                                        {inputs.avgRating?.toFixed(1)}{" "}
                                    </td>
                                    <td style={{ fontSize: "22px" }}>/5</td>
                                    <td style={{ paddingLeft: "25px" }}>
                                        <div style={styles.stars}>
                                            {stars.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        size={28}
                                                        color={
                                                            inputs.avgRating?.toFixed(0) > index
                                                                ? colors.orange
                                                                : colors.grey
                                                        }
                                                    />
                                                );
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </Card.Body>
            </Card>
            <br />
            <div className="popup-form-container">
                <table>
                    <tr>
                        <td style={{ verticalAlign: "top" }}>
                            {" "}
                            <button onClick={handleOpen} className="button" style={{ width: '170px', height: '40px' }}>
                                <span>Write a Review </span>
                            </button>
                        </td>
                        <td style={{ width: "1000px" }}>
                            {isOpen && (
                                <Card style={{ width: "50%", marginLeft: "40px" }}>
                                    <Card.Body>
                                        <form onSubmit={handleSubmit}>
                                            <button
                                                className="close-button"
                                                onClick={handleClose}
                                                style={{
                                                    float: "right",
                                                    borderRadius: "50%",
                                                    width: "30px",
                                                    height: "30px",
                                                    border: "none",
                                                    backgroundColor: "#B666D2",
                                                    color: "white",
                                                }}
                                            >
                                                X
                                            </button>

                                            <Box
                                                component="form"
                                                sx={{
                                                    "& > :not(style)": { m: 0.5, width: "35ch" },
                                                }}
                                                noValidate
                                                autoComplete="off"
                                                style={{ marginLeft: "12px" }}
                                            >
                                                <TextField
                                                    id="outlined-basic"
                                                    label="User Name"
                                                    variant="outlined"
                                                    name="name"
                                                    value={inpval.name}
                                                    onChange={setdata}
                                                />
                                                <table>
                                                    <tr>
                                                        <td>Rating :</td>
                                                        <td>
                                                            <Rating
                                                                style={{
                                                                    fontSize: "27px",
                                                                    marginLeft: "7px",
                                                                    paddingTop: "8px",
                                                                }}
                                                                name="rating"
                                                                value={inpval.rating}
                                                                onChange={setdata}
                                                                precision={1}
                                                            />
                                                        </td>
                                                    </tr>
                                                </table>
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Comment"
                                                    variant="outlined"
                                                    multiline
                                                    rows={4}
                                                    name="comment"
                                                    value={inpval.comment}
                                                    onChange={setdata}
                                                />
                                            </Box>
                                            <button
                                                class="button"
                                                onClick={handleOpen}
                                                style={{ width: "301px", marginLeft: "16px", height: '40px' }}
                                            >
                                                <span>Submit Review </span>
                                            </button>
                                        </form>
                                    </Card.Body>
                                </Card>
                            )}
                        </td>
                    </tr>
                </table>
            </div>
            <br></br>
            <Card style={{ width: '100%', borderRadius: '0px' }}>
                {review.map((review, id) => {
                    return (
                        <div>
                            <div className="row">
                            <div className="review_column">
                                <p style={{marginLeft:'20px'}}>{review.name}</p>
                            </div>
                            <div className="review_column2">
                                <Rating
                                    style={{ fontSize: "17px" }}
                                    name="half-rating-read"
                                    defaultValue={review.rating}
                                    precision={0.5}
                                    readOnly
                                />
                                <p>{review.comment}</p>
                            </div>
                            <div className="review_column3">
                                <p style={{fontSize:'13px'}}>{review.date}</p>
                            </div><hr style={{width:'97%',marginLeft:'15px'}}></hr>
                            </div>
                        </div>

                        
                    );
                    <hr></hr>
                })}
            </Card>
        </div>
    );
};

export default Review;

const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
        Animationdelay: "4s",
    },
};
