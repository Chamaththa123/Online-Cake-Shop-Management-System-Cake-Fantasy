import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddEmployee() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      const role = 1;
      try {
        const res = await axios.post(`http://localhost:8000/api/v1/auth/register`, {
          name,
          email,
          password,
          phone,
          address,answer,role
        });
        if (res && res.data.success) {
          window.alert(res.data && res.data.message)
          navigate("/Employee");
        } else {
          window.alert(res.data.message)
        }
      } catch (error) {
        console.log(error);
        window.alert("Something Wrong!!")
      }
    };
  return (
    <div>
      <center>
        <div style={{backgroundColor:'white'}}>
          <br></br>

        <div className="form-container " style={{width:'60%'}}>
          
        <form onSubmit={handleSubmit}>
          <h4 className="title">Give Access for New Employee</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{width:'100%'}}>
            REGISTER
          </button>
        </form>
        <br></br>
      </div>
      </div>
        </center>
    </div>
  )
}

export default AddEmployee
