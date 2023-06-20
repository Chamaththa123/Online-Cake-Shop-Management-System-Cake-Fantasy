import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Sidebar from "../../components/Layout/Sidebar";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <Sidebar/>
    </Layout>
  );
};

export default AdminDashboard;