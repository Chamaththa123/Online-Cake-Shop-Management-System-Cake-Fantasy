import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Card from 'react-bootstrap/Card';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        window.alert(res.data && res.data.message);
        setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
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
        <div className="form-container " style={{width:'30%',textAlign:'left'}}>
          <br></br>
          <Card style={{padding:'30px'}}>
          <form onSubmit={handleSubmit}>
         <center> <i><h4 className="title">Signin to Cake Fantasy</h4></i></center>
         <br/>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            
            <a onClick={() => {
                navigate("/ForgotPassword");
              }} href="" style={{textDecoration:'none'}}>Forgot Password ?</a>
          </div>
          <button type="submit" className="btn btn-primary" style={{width:'100%',textAlign:'center',backgroundColor:'#b666d2',borderColor:"#b666d2"}}>
            SignIn
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

export default Login;