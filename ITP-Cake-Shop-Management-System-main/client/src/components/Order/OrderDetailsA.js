import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";

function OrderDetailsA() {
    const id = useParams().id;
    console.log(id);

    const [inputs, setInput] = useState({});

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:8000/order/${id}`)
                .then((res) => res.data)
                .then((data) => setInput(data.order));
        };
        fetchHandler();
    }, [id]);

    function Button({ status }) {
        return (
            <p
                style={{
                    color: status === "Processing" ? "#FC8900" : "green",
                    backgroundColor: status === "Processing" ? "#FCC98C " : "#8EFF94",
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

    const history = useNavigate();
    const deleteHandler = () => {
        axios
            .delete(`http://localhost:8000/order/delete/${id}`)
            .then((res) => res.data)
            .then(() => history("/order/admin/allorders"), alert("Item Deleted!!!"));
    };
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
                                Order Status :{" "}
                                <Button
                                    status={inputs.orderStatus}
                                    style={{ width: "10px", float: "left" }}
                                />
                            </p>
                        </div>
                        <br></br>
                        <p style={{ marginLeft: "30.9%" }}>Customer Note : {inputs.note}</p>

                        <button
                            type="button"
                            class="btn btn-danger"
                            style={{ marginLeft: "30.9%" }}
                            onClick={deleteHandler}
                        >
                            Delete Order Details
                        </button>
                        <a a href={`/order/admin/update/${inputs._id}`}>
                            <button
                                type="button"
                                class="btn btn-warning"
                                style={{ color: "white", marginLeft: "20px" }}
                            >
                                Update Order Status
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailsA;
