import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Card from 'react-bootstrap/Card';

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        window.alert(res.data && res.data.message);

        navigate("/login");
      } else {
        window.alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <Header />
      <hr style={{ marginTop: "-10px" }}></hr>
      <br></br>
      <br></br>
      <center>
        <div className="form-container " style={{ width: '30%', textAlign: 'left' }}>
          <Card style={{ padding: '30px' }}>
            <form onSubmit={handleSubmit}>
              <center> <i><h4 className="title">Reset Password</h4></i></center>
              <br></br>

              <div className="mb-3">
                <h6><i>Enter User Email :</i></h6>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="---"
                  required
                />
              </div>
              <div className="mb-3">
                <h6><i>Enter Your Favourite Cake :</i></h6>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="---"
                  required
                />
              </div>
              <div className="mb-3">
                <h6><i>Enter New Password :</i></h6>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="***"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', backgroundColor: '#b666d2', borderColor: "#b666d2" }}>
                <i> Reset Password</i>
              </button>
            </form>
          </Card>
          <br></br>
          <br></br>
        </div>
      </center>
      <Footer />
    </Layout>
  );
};

export default ForgotPasssword;