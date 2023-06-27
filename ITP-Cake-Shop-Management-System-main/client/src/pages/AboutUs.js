import React from "react";
import Header from "../components/Layout/Header";
import logo from "../images/logo.png";
import about from "../images/aboutus.jpg";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";

function AboutUs() {
  return (
    <Layout title={"CakeFantasy - About Us"}>
      <div style={{ backgroundColor: "white" }}>
        <Header />
        <hr style={{ marginTop: "-10px" }}></hr>
        <div
          style={{
            marginLeft: "50px",
            marginRight: "600px",
            marginTop: "50px",
          }}
        >
          <p>
            Cake Fantasy Shop is the creation of Chef ABCDEF. Having been a top
            pastry chef for several years in the hotel industry, his passion to
            bring forth the rich and tasteful delights to the public drew him to
            start up his own business. What started in 2010 as a small
            restaurant, “Cake Fantasy” is now an established and well known name
            among everyone.
          </p>
          <p>
            With a dedicated and friendly staff of over 80 men and women, we
            strive to provide the best quality food and service always. In
            keeping up with technological developments and consumer demand, we
            have been continually modernising our processes and provide computer
            based systems and online services.
          </p>
          <p>
            Comprising of a skilled and artistic staff, we accept orders for
            wedding structures, design cakes, shape cakes and even customized &
            personalized Cake Fantasy creations. Our menu currently consists of
            a diverse selection from sweets, cakes & flowers, among many others.
          </p>
          <p>
            Our dynamic catering team is equipped and ready to server any
            occasion. With the flexibility to provide you with a customized
            menu, we ensure our service blends smoothly with any event.
          </p>
          <p>
            We are located at <br></br>
            <b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No. 347, Galle
              Road, Colombo 3, Sri Lanka.
            </b>
            <br></br>
            <br></br>
            Open from <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>
              7:00am - 7:00pm Monday to Saturday,<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8:00am to 5:00pm
              on Sundays <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8:00am to 3:00pm
              on Poya and other Mercantile Holidays.
            </b>
            <br></br>
            <br></br>Our phone lines <b>0112573321</b> and <b>0112574299</b> are
            open for orders and inquiries during operating hours.
          </p>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "200px",
              height: "auto",
              marginLeft: "70.5%",
              marginTop: "-1000px",
            }}
          />
          <img
            src={about}
            alt="logo"
            style={{
              width: "450px",
              height: "auto",
              marginLeft: "61%",
              marginTop: "-700px",
              borderRadius: "20px",
            }}
          />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export default AboutUs;
