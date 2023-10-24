import React from 'react';
import '../Sidebar.css';
import logo from '../../images/logo.png';
import product from '../../images/cake.png';
import dashboard from '../../images/dashboard.png';

function Sidebar() {
  return (
    <div>
      <div className="sidenav">
        <div>
         <center> <img src={logo} className='logo' alt='cd'/></center>
        </div>
        <a href="#"><img src={dashboard} className='icon' alt='cd'/> DashBoard</a>
          <a href="/Product"><img src={product} className='icon' alt='cd'/> Products</a>
          <a href="#clients">Orders</a>
          <a href="#clients">Custom Orders</a>
          <a href="#contact">Inventory</a>
          <a href="#contact">Messages</a>
          <a href="#contact">Customers</a>
          <a href="#contact">Employees</a>
          <a href="#contact">Employees</a>
          <a href="#contact">Employees</a>
      </div>
    </div>
  );
}

export default Sidebar;
