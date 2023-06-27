import React ,{useState} from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import faq from '../images/FAQ.png'

function FAQ() {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {setIsOpen(true);};
    const handleClose = () => {setIsOpen(false);};

    const [isOpen2, setIsOpen2] = useState(false);
    const handleOpen2 = () => {setIsOpen2(true);};
    const handleClose2 = () => {setIsOpen2(false);};

    const [isOpen3, setIsOpen3] = useState(false);
    const handleOpen3 = () => {setIsOpen3(true);};
    const handleClose3 = () => {setIsOpen3(false);};

    const [isOpen4, setIsOpen4] = useState(false);
    const handleOpen4 = () => {setIsOpen4(true);};
    const handleClose4 = () => {setIsOpen4(false);};

    const [isOpen5, setIsOpen5] = useState(false);
    const handleOpen5 = () => {setIsOpen5(true);};
    const handleClose5 = () => {setIsOpen5(false);};

    const [isOpen6, setIsOpen6] = useState(false);
    const handleOpen6 = () => {setIsOpen6(true);};
    const handleClose6 = () => {setIsOpen6(false);};

    const [isOpen7, setIsOpen7] = useState(false);
    const handleOpen7 = () => {setIsOpen7(true);};
    const handleClose7 = () => {setIsOpen7(false);};

    const [isOpen8, setIsOpen8] = useState(false);
    const handleOpen8 = () => {setIsOpen8(true);};
    const handleClose8 = () => {setIsOpen8(false);};

    const [isOpen9, setIsOpen9] = useState(false);
    const handleOpen9 = () => {setIsOpen9(true);};
    const handleClose9 = () => {setIsOpen9(false);};

    const [isOpen10, setIsOpen10] = useState(false);
    const handleOpen10 = () => {setIsOpen10(true);};
    const handleClose10 = () => {setIsOpen10(false);};

  return (
    <div style={{backgroundColor:'white'}}>
      <Header/>

      <div>
        <center><img src={faq} alt='FAQ' style={{width:'700px'}} /></center>

        <center><p style={{marginTop:'40px',fontSize:'27px'}}>Frequently Asked Questions</p>
        <p>We Are Here For You</p></center>

        <p style={{marginLeft:'90px'}}>F A Q</p>
        <p style={{marginLeft:'90px'}}>Find the answers to our most frequently asked questions. If you don't see what's on your
             mind reach out to us anytime on phone or email. We're here to make sure your experience with us is the best it possibly can be!</p>
        <br></br><br></br>
        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;How are orders placed?</b>
        {isOpen && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      Can be done via the happiness link (https://CakeFantasy.com) or calling the happiness hotline +94 (0)112 00 11 22
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen2} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;How are the flowers delivered?</b>
        {isOpen2 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose2}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      We deliver your florals with utmost care using our own fleet that is well-equipped with freezer facilities. The bouquets are prepared and packaged fit 
                      for transport and we guarantee 07 days freshness.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen3} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;What happens if the recipient is not present when the delivery is made?</b>
        {isOpen3 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose3}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      To ensure our quality standards are maintained, we usually bring the package back to our location until we reattempt delivery. In some instances, it may be left at a saf
                      e nearby location (ex: with a neighbour). In all cases, a phone call will be given to inform the recipient and/or sender.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen4} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;Can I place an order for international delivery?</b>
        {isOpen4 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose4}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      Please contact us on our happiness hotline +94 (0)112001122. We have affiliate partners around the world and will be
                       happy to help with your order.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen5} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;Do you deliver on weekends/ public holidays?</b>
        {isOpen5 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose5}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      We operate during weekends including public holidays. Our delivery services are available 365 days a year.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen6} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;How do I check the status of my order?</b>
        {isOpen6 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose6}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      Once the order is placed, an order confirmation email will be sent to you (please check your junk folder if you don't see it in your inbox). This will contain a 
                      'track order' button, that you can click to find out the current status of your delivery.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen7} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;Can my order be a surprise? </b>
        {isOpen7 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose7}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      Yes, of course. Provide us with accurate details of the delivery address, directions to location and necessary landmarks — we will take care of the rest.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen8} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;What if the city I want the order delivered to is not listed? </b>
        {isOpen8 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose8}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      Please reach out to us on our happiness hotline +94 (0)112001122 for special delivery 
                      arrangements to your desired location.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen9} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;Is it safe to shop at CakeFantasy?</b>
        {isOpen9 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose9}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      Yes, our site is secured using a VeriSign Digital Certificate, that is used internationally by all major E-commerce sites. This ensures all information that is shared over the internet is encrypted, 
                      making it impossible for any unauthorized party to intercept, as long as you follow basic web browsing practices that is safe and secure.
                    </p>)}
        </div>

        <div style={{marginLeft:'90px',marginRight:'90px',marginBottom:'20px'}}>
        <button onClick={handleOpen10} style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>+</button>
        <b>&nbsp;&nbsp;&nbsp;What payment options do you accept? </b>
        {isOpen10 && (
                    <p style={{marginTop:'10px',marginLeft:'20px'}}><button  onClick={handleClose10}
                        style={{borderRadius: "50%",width: "28px",height: "28px",border: "none",backgroundColor: "#B666D2",color: "white"}}>
                        -
                      </button>&nbsp;&nbsp;&nbsp;
                      We accept any of the following methods of payment for purchases made online at CakeFantasy: All major credit cards (VISA, MasterCard, and American Express) Bank transfers for orders placed via our hotline.
                    </p>)}
        </div>
      </div>
      <br></br>
      <Footer/>
    </div>
  )
}

export default FAQ
