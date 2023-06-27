import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import HomeRandom from '../components/Product/HomeRandom'

function HomePage() {
  const [auth,setAuth]=useAuth();
  return (
    <Layout title={"CakeFantasy - HomePage"}>
      <Header/>
      <hr style={{ marginTop: "-10px" }}></hr>
        <div className='home-column1'>
          <div className='home-column2'>
          <i class='fas fa-arrows-alt'></i> ALL CATEGORIES
          </div>
          <br></br>
          <br></br>
          <br></br>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Birthday Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Flowers</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Cartoon Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Wedding Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Print Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Cup Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Kids Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Icing Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Anniversary Cakes</a></p>
          <p className='category'><i class='fas fa-bullseye' style={{fontSize:'20px'}}></i><a href='s' style={{textDecoration:'none',color:'#772196'}}>&nbsp;&nbsp;&nbsp; Chocolate</a></p>
        </div>
        <div className='home-column3'>

        </div>
        <div className='home-column4'>

        </div>
        <div style={{marginTop:'550px'}}>
          <HomeRandom/>
        </div>
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
