import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Sidebar from "../Layout/Sidebar";
import user from "../../images/user.png";

function UpdateEmp() {
    const id = useParams().id;
    console.log(id);
    const history = useNavigate();
    const [inputs, setInput] = useState({});

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:8000/Emp/${id}`)
                .then((res) => res.data)
                .then((data) => setInput(data.order));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios
            .put(`http://localhost:8000/Emp/update/${id}`, {
                role: String(inputs.role),
            })
            .then((res) => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(
            () => history("/Employee"),
            window.alert("Set System Access Successfully!!!")
        );
    };

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <div className="content">
                <Sidebar />
                <div className="main">
                    <br></br>

                    <div className="main-card" style={{ height: "500px" }}>
                        <div>
                            <br></br>
                            <div style={{ backgroundColor: "white" }}>
                                <br></br>

                                <div
                                    className="form-container "
                                    style={{ width: "90%", marginLeft: "5%" }}
                                >
                                    <h3>Employee - {inputs?.name}</h3>
                                    <br></br>

                                    <div className="column_emp1">
                                        <img src={user} alt="user" style={{ width: "250px" }} />
                                    </div>
                                    <div className="column_emp2">
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="mb-1">
                                                <Col>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>Employee Name :</Form.Label>
                                                        <p>{inputs?.name}</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>Employee Email :</Form.Label>
                                                        <p>{inputs?.email}</p>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-1">
                                                
                                                <Col>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>Employee Phone :</Form.Label>
                                                        <p>{inputs?.phone}</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>System Access :</Form.Label>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            name="role"
                                                            value={inputs.role}
                                                            onChange={handleChange}
                                                        >
                                                            <option>Select</option>
                                                            <option value="1">Allow</option>
                                                            <option value="0">Deny</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Button
                                                        variant="success"
                                                        type="submit"
                                                        style={{ width: "100%" }}
                                                    >
                                                        Set System Access
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row className="mb-1"></Row>
                                        </Form>
                                    </div>

                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmp;
