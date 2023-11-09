import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Card from 'react-bootstrap/Card';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,answer
      });
      if (res && res.data.success) {
        window.alert(res.data && res.data.message)
        navigate("/");
      } else {
        window.alert(res.data.message)
      }
    } catch (error) {
      console.log(error);
      window.alert("Something Wrong!!")
    }
  };

  return (
    
      <Layout>
        <Header/>
        
        <center>
        <div style={{backgroundColor:'white'}}>
        <hr style={{ marginTop: "-10px" }}></hr>
          <br></br>

        <div className="form-container " style={{width:'30%'}}>
        <Card style={{ padding: '30px' }}>
        <form onSubmit={handleSubmit}>
        <center> <i><h4 className="title">SignUp to Cake Fantasy</h4></i></center>
        <br />
          <div className="mb-3">
          <h6 style={{textAlign:'left'}}><i>User Name :</i></h6>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="---"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
          <h6 style={{textAlign:'left'}}><i>User Email :</i></h6>
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
          <h6 style={{textAlign:'left'}}><i>User Password :</i></h6>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="***"
              required
            />
          </div>
          <div className="mb-3">
          <h6 style={{textAlign:'left'}}><i>Contact NO :</i></h6>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="--- --- ----"
              required
            />
          </div>
          <div className="mb-3">
          <h6 style={{textAlign:'left'}}><i>Address :</i></h6>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="---"
              required
            />
          </div>
          <div className="mb-3">
          <h6 style={{textAlign:'left'}}><i>What is Your Favourite Cake ?</i></h6>
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
          <button type="submit" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', backgroundColor: '#b666d2', borderColor: "#b666d2" }}>
           <i> SignUp</i>
          </button>
        </form>
          </Card>
        
        <br></br>
        <br></br>

      </div>
      </div>
        </center>
        
      <Footer/>
      </Layout>
    
  );
};

export default Register;