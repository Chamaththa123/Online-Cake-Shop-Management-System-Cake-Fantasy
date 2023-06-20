import React from 'react'
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import { useAuth } from '../../context/auth'

function Profile() {
    const [auth, setAuth] = useAuth();
  return (
    <Layout title={"CakeFantasy - User Profile"}>
        <Header/>
        <div>
        <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
              <h3> Admin Contact : {auth?.user?.address}</h3>
    </div>
        <Footer/>
    </Layout>
  )
}

export default Profile
