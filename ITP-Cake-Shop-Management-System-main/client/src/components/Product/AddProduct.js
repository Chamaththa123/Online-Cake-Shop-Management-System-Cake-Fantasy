import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddProduct() {
    const [item_code, setitem_code] = useState("");
    const [item_name, setitem_name] = useState("");
    const [description1, setdescription1] = useState("");
    const [description2, setdescription2] = useState("");
    const [description3, setdescription3] = useState("");
    const [category, setcategory] = useState("");
    const [status, setstatus] = useState("");
    const [price, setprice] = useState("");
    const [fileName, setFileName] = useState("");

    const [isValid, setIsValid] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        if (item_code.startsWith("OI")) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [item_code]);

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    };

    const changeOnclick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("item_code", item_code);
        formData.append("item_name", item_name);
        formData.append("description1", description1);
        formData.append("description2", description2);
        formData.append("description3", description3);
        formData.append("category", category);
        formData.append("status", status);
        formData.append("price", price);
        formData.append("image", fileName);

        setitem_code("");
        setitem_name("");
        setdescription1("");
        setdescription2("");
        setdescription3("");
        setcategory("");
        setstatus("");
        setprice("");
        setFileName("");

        axios
            .post("http://localhost:8000/oitem/save", formData)
            .then((res) =>
                window.alert("Item Add is Succesfully", {
                    position: "top-right",
                    autoClose: 7000,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            )
            .catch((err) => {
                setError(err.response.data.error);
            });
    };

    return (
        <div>
            <div>
                <div style={{ margin: "20px" }}>
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>Add New Product</p>
                    {error && (
                        <div className="alert alert-danger">
                            Fill All Required Fileds...!
                        </div>
                    )}
                    <br></br>
                    <Form onSubmit={changeOnclick} encType="multipart/form-data">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Code :</Form.Label>
                            <Form.Control
                                type="text"
                                name="item_code"
                                placeholder="Enter item_code"
                                value={item_code}
                                onChange={(e) => setitem_code(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                <p>* Required</p>
                            </Form.Text>
                        </Form.Group>
                        {!isValid && (
                            <p style={{ color: "red" }}>Item Code must start with 'OI'.</p>
                        )}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Name :</Form.Label>
                            <Form.Control
                                type="text"
                                name="item_name"
                                placeholder="Enter Item name"
                                onChange={(e) => setitem_name(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                <p>* Required</p>
                            </Form.Text>
                        </Form.Group>

                        <Row className="mb-1">
                            <Col>
                                <Form.Label>Category :</Form.Label>

                                <Form.Select
                                    aria-label="Default select example"
                                    name="category"
                                    value={category}
                                    onChange={(e) => setcategory(e.target.value)}
                                >
                                    <option>Select Category</option>
                                    <option value={"Flowers"}>Flowers</option>
                                    <option value={"Chocolate & GIFT Pack"}>
                                        Chocolate & GIFT Pack
                                    </option>
                                    <option value={"Mugs & Cards"}>Mugs & Cards</option>
                                    <option value={"Cake Ingredient"}>Cake Ingredient</option>
                                </Form.Select>
                                <Form.Text className="text-muted">
                                    <p>* Required</p>
                                </Form.Text>
                            </Col>

                            <Col>
                                <Form.Label>Item Status :</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    name="status"
                                    value={status}
                                    onChange={(e) => setstatus(e.target.value)}
                                >
                                    <option>Select Status</option>
                                    <option value={"In Stock"}>In Stock</option>
                                    <option value={"Out Of Stock"}>Out Of Stock</option>
                                </Form.Select>
                                <Form.Text className="text-muted">
                                    <p>* Required</p>
                                </Form.Text>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description 01 :</Form.Label>
                            <Form.Control
                                as="textarea"
                                aria-label="With textarea"
                                rows="4"
                                name="description1"
                                value={description1}
                                onChange={(e) => setdescription1(e.target.value)}
                                placeholder="Enter Description 1"
                            />
                            <Form.Text className="text-muted">
                                Enter normal text description.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description 02 :</Form.Label>
                            <Form.Control
                                as="textarea"
                                style={{ fontWeight: "bold" }}
                                aria-label="With textarea"
                                rows="4"
                                name="description2"
                                value={description2}
                                onChange={(e) => setdescription2(e.target.value)}
                                placeholder="Enter Description 2"
                            />
                            <Form.Text className="text-muted">
                                Enter bold text description.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description 03 :</Form.Label>
                            <Form.Control
                                as="textarea"
                                style={{ color: "red" }}
                                aria-label="With textarea"
                                rows="4"
                                name="description3"
                                value={description3}
                                onChange={(e) => setdescription3(e.target.value)}
                                placeholder="Enter Description 3"
                            />
                            <Form.Text className="text-muted">
                                Enter red color text description.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Price :</Form.Label>
                            <Form.Control
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                name="price"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setprice(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                <p>* Required</p>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Item Image :</Form.Label>
                            <Form.Control type="file" name="image" onChange={onChangeFile} />
                            <Form.Text className="text-muted">
                                <p>* Required</p>
                            </Form.Text>
                        </Form.Group>

                        <button
                            type="submit"
                            className="button"
                            style={{
                                marginTop: "15px",
                                width: "100%",
                                height: "40px",
                                borderRadius: "6px",
                                backgroundColor: "#1FC00F",
                                border: "none",
                            }}
                            disabled={!isValid}
                        >
                            <i className="far fa-check-square"></i>&nbsp;Add New Product
                        </button>
                    </Form>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
