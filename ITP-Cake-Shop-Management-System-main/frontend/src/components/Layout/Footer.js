import React from 'react'
import payment from '../../images/payment.png'
import logo from '../../images/logo.png'
import { useAuth } from "../../context/auth";

function Footer() {
  const [auth, setAuth] = useAuth();
  return (
    <div>

<div className='column_f7'>
<img src={logo} style={{width:'160px',height:'auto',float:'left'}} alt='logo'/>
<p style={{marginLeft:'25%',marginTop:'50px'}}><a href='/' style={{textDecoration:'none',color:'black'}}>Home</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='#a' style={{textDecoration:'none',color:'black'}}>Our Collection</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='#a' style={{textDecoration:'none',color:'black'}}>Custom Cake</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='/DeliveryArea' style={{textDecoration:'none',color:'black'}}>Delivery Areas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='/FAQ' style={{textDecoration:'none',color:'black'}}>FAQ</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='#a' style={{textDecoration:'none',color:'black'}}>Contact Us</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href='/AboutUs' style={{textDecoration:'none',color:'black'}}>About Us</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}  style={{textDecoration:'none',color:'black'}}>
                          Dashboard
                        </a></p>
      </div>
      

      <div className='column_f1'>
        <button className='btn_f'><i class='fas fa-shipping-fast' style={{fontSize:'25px',color:'#B666D2'}}></i></button>
        <p style={{marginTop:'9px',fontSize:'15px'}}>&nbsp;&nbsp;&nbsp;<p style={{fontSize:'20px'}}>&nbsp;&nbsp;&nbsp;<b>Delivery</b></p> 
        &nbsp;&nbsp;&nbsp;&nbsp;Fast and Responsible Delivery</p>
      </div>
      <div className='column_f2'>
      <button className='btn_f'><i class='fa fa-dollar' style={{fontSize:'25px',marginLeft:'-3px',color:'#B666D2'}}></i></button>
        <p style={{marginTop:'9px',fontSize:'15px'}}>&nbsp;&nbsp;&nbsp;<p style={{fontSize:'20px'}}>&nbsp;&nbsp;&nbsp;<b>100% Value For Your Money</b></p> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can make your dream come true.</p>
      </div>
      <div className='column_f3'>
      <button className='btn_f' style={{marginLeft:'60px'}}><i class='far fa-clock' style={{fontSize:'25px',color:'#B666D2'}}></i></button>
        <p style={{marginTop:'9px',fontSize:'15px'}}>&nbsp;&nbsp;&nbsp;<p style={{fontSize:'20px'}}>&nbsp;&nbsp;&nbsp;<b>24/7 Online Support</b></p> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Via Facebook Messenger service.</p>
      </div>

      <div className='column_f4'>
        <a href="sa" class="fa fa-facebook"></a>
        <a href='edf' class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-google"></a> 
        <a href="#" class="fa fa-linkedin"></a> 
        <a href="#" class="fa fa-youtube"></a>
      </div>
      <div className='column_f5'>
        <p style={{marginLeft:'20px',fontSize:'15px'}}>© 2023 All Rights Reserved by Chamaththa Shamod</p>
      </div>
      <div className='column_f6'>
        <img src={payment} alt='payment' width='200' style={{marginTop:'-30px',marginLeft:'80px'}}/>
      </div>

    </div>
  )
}

export default Footer
