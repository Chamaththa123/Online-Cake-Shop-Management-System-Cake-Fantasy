import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Form from "react-bootstrap/Form";

function UpdateOrder() {
    const [inputs, setInput] = useState({});
    const id = useParams().id;
    const history = useNavigate();

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:8000/order/${id}`)
                .then((res) => res.data)
                .then((data) => setInput(data.order));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios
            .put(`http://localhost:8000/order/update/${id}`, {
                orderStatus: String(inputs.orderStatus),
            })
            .then((res) => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(
            () => history("/order/admin/allorders"),
            window.alert("Set Order Status Successfully!!!")
        );
    };

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function Button2({ status }) {
        return (
            <p
                style={{
                    color: status === "Unsuccess" ? "#FC8900" : "green",
                    backgroundColor: status === "Unsuccess" ? "#FCC98C " : "#8EFF94",
                    width: "100px",
                    borderRadius: "16px",
                    height: "22px",
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "-20px",
                    marginLeft: "130px",
                }}
            >
                {status}
            </p>
        );
    }
    return (
        <div>
            <div className="content">
                <Sidebar />
                <div className="main">
                    <br></br>

                    <div className="main-card" style={{ height: "530px" }}>
                        <p style={{ fontSize: "25px", padding: "20px", marginLeft: "5%" }}>
                            Order Details
                        </p>
                        <div className="order-column5">
                            <p>
                                <img
                                    src={`/uploads/${inputs.product_image}`}
                                    alt="ss"
                                    style={{ width: "180px", height: "160px", marginLeft: "10%" }}
                                    className="img"
                                />
                            </p>
                            {inputs.image}
                        </div>
                        <div className="order-column6">
                            <p>Product Name : {inputs.product_name}</p>
                            <p>Delivery Name : {inputs.delivery_name}</p>
                            <p>Delivery Phone : {inputs.delivery_phone}</p>
                            <p>Delivery Address : {inputs.delivery_address}</p>
                            <p>Delivery Area : {inputs.delivery_area}</p>
                        </div>
                        <div className="order-column6">
                            <p>Unit Price : Rs.{inputs.unit_price?.toFixed(2)}</p>
                            <p>Shipping Price : Rs.{inputs.shipping?.toFixed(2)}</p>
                            <p>Total Price : Rs.{inputs.total?.toFixed(2)}</p>
                            <p>
                                Payment Status :{" "}
                                <Button2
                                    status={inputs.payment}
                                    style={{ width: "10px", float: "left" }}
                                />
                            </p>
                            <p>
                                Order Status :
                                <form onSubmit={handleSubmit}>
                                    <Form.Select
                                        aria-label="Default select example"
                                        name="orderStatus"
                                        value={inputs.orderStatus}
                                        onChange={handleChange}
                                        style={{ width: '39%' }}
                                    >
                                        <option value={"Processing"}>Processing</option>
                                        <option value={"Complete"}> Complete</option>
                                    </Form.Select>
                                    <br></br>
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                        onClick={handleSubmit}
                                    >
                                        Set Order Status
                                    </button>
                                </form>
                            </p>
                        </div>
                        <br></br>
                        
                        <p style={{ marginLeft: "30.9%" ,marginTop:'300px'}}>Customer Note : {inputs.note}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateOrder;
