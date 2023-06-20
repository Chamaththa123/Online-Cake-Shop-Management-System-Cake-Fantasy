import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

function HomePage() {
  const [auth,setAuth]=useAuth();
  return (
    <Layout title={"CakeFantasy - HomePage"}>
      <Header/>
        home page
        <pre>{JSON.stringify(auth,null,4)}</pre>
      <Footer/>
    </Layout>
  )
}
Layout.defaultProps = {
  title: "Cake Fantasy Cake Shop",
  description: "Cake Fantasy Cake Shop",
  keywords: "cake",
  author: "Chamaththa Shamod",
};

export default HomePage
