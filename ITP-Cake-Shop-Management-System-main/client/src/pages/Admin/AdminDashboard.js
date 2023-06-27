import React from "react";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Sidebar from "../../components/Layout/Sidebar";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="content">
        <Sidebar />
        <div className="main">
          <br></br>

          <div className="main-card">
            xcvdsvsv
            </div><br></br>
            </div>
            </div>
      
    </Layout>
  );
};

export default AdminDashboard;