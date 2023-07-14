import React from "react";
import logo from "../../images/logo.png";
import { useAuth } from "../../context/auth";
import "../../css.css";

function Header() {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    window.alert("Logout Successfully");
  };
  return (
    <div>
      <div class="column1">
        <c style={{ color: "white", marginLeft: "25%" }}>
          Say Hi to the Cake Fantasy It’s Time to Buy Your Favourite !
        </c>

        {!auth?.user ? (
          <>
            <a
              href="/Login"
              style={{
                color: "white",
                fontSize: "15px",
                float: "right",
                textDecoration: "none",
                marginLeft: "15px",
              }}
            >
              SignIn
            </a>
            <a
              href="/Register"
              style={{
                color: "white",
                fontSize: "15px",
                float: "right",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              SignUp
            </a>
          </>
        ) : (
          <>
            <a onClick={handleLogout} href="/Login">
              <c
                style={{
                  color: "white",
                  fontSize: "15px",
                  float: "right",
                  textDecoration: "none",
                  marginLeft: "15px",
                }}
              >
                {" "}
                Logout
              </c>
            </a>
            <a
              href="/UserProfile"
              style={{ fontWeight: "300", float: "right" }}
            >
              <i
                class="far fa-user-circle"
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "300",
                  marginTop: "0px",
                  marginRight: "5px",
                }}
              ></i>
            </a>
            <c
              style={{
                color: "white",
                fontSize: "15px",
                float: "right",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              {auth?.user?.name}
            </c>
          </>
        )}
      </div>
      <div class="column2">
        <c style={{ fontWeight: "400", fontSize: "15px" }}>CONTACT</c>
        <a href="sa" class="fa fa-facebook"></a>
        <a href="edf" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
      </div>

      <p style={{ fontSize: "1px", marginBottom: "-1px" }}>a</p>

      <div class="topnav">
        <img
          src={logo}
          style={{ width: "160px", height: "120px" }}
          alt="logo"
        />
        <a href="/AboutUs" class="split">
          About Us
        </a>
        <a href="/ContactUs" class="split">
          Contact Us
        </a>
        <a href="/FAQ" class="split">
          FAQ
        </a>
        <a href="/DeliveryArea" class="split">
          Delivery Areas
        </a>
        <a href="/CustomCake" class="split">
          Custom Cake
        </a>
        <a href="/OurCollection" class="split">
          Our Collection
        </a>
        <a href="/" class="split">
          Home
        </a>
      </div>
    </div>
  );
}

export default Header;
