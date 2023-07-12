import React from "react";
import logo from "../../images/logo.png";
import "../../css.css";

function Sidebar() {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div>
        <div className="navigation">
          <ul>
            <li>
              <img
                src={logo}
                alt="logo"
                width="150"
                height="auto"
                style={{ marginLeft: "11px" }}
              />
            </li>

            <li>
              <a href="/dashboard/admin">
                <span className="icon">
                  <i class="fa fa-dashboard" style={{ marginLeft: "-3px" }}></i>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="/user/admin/allusers">
                <span className="icon">
                  <i class="fas fa-users"></i>
                </span>
                <span className="title">Customers</span>
              </a>
            </li>

            <li>
              <a href="/Product">
                <span className="icon">
                  {" "}
                  <i
                    class="fa fa-birthday-cake"
                    style={{ marginLeft: "-3px" }}
                  ></i>
                </span>
                <span className="title">Products</span>
              </a>
            </li>

            <li>
              <a href="/order/admin/allorders">
                <span className="icon">
                  {" "}
                  <i
                    class="fas fa-shopping-basket"
                    style={{ marginLeft: "-3px" }}
                  ></i>
                </span>
                <span className="title">Orders</span>
              </a>
            </li>

            <li>
              <a href="#d">
                <span className="icon">
                  {" "}
                  <i class="fas fa-qrcode" style={{ marginLeft: "-3px" }}></i>
                </span>
                <span className="title">Inventory</span>
              </a>
            </li>

            <li>
              <a href="/Employee">
                <span className="icon">
                  <i class="fas fa-user-shield"></i>
                </span>
                <span className="title">Employees</span>
              </a>
            </li>

            <li>
              <a href="#d">
                <span className="icon">
                  <i class="fas fa-shipping-fast"></i>
                </span>
                <span className="title">Delivery</span>
              </a>
            </li>

            <li>
              <a href="/AllContact">
                <span className="icon">
                  <i class="far fa-comment-dots"></i>
                </span>
                <span className="title">Contact Us</span>
              </a>
            </li>

            <li>
              <a href="#d">
                <span className="icon">
                  <i class="fas fa-ad"></i>
                </span>
                <span className="title">Advertisement</span>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>

      <div>
        <div className="navigation2">
          <p
            style={{
              marginLeft: "30px",
              marginTop: "16px",
              fontSize: "30px",
              fontWeight: "600",
              color: "#880bb6",
              float: "left",
            }}
          >
            Cake Fantasy (PVT) Ltd
          </p>
          <p style={{ marginLeft: "85%", marginTop: "30px" }}>
            <a href="sa" class="fa fa-facebook"></a>
            <a href="edf" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
