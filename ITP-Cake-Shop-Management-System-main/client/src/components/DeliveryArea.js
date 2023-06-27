import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Table from "react-bootstrap/Table";

function DeliveryArea() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <hr style={{ marginTop: "-10px" }}></hr>

      <div className="margin">
        <p style={{ fontSize: "35px", fontWeight: "500" }}>
          Delivery Locations
        </p>

        <p style={{ fontSize: "25px", fontWeight: "400" }}>
          Free pick up Locations
        </p>

        <ul>
          <li>CakeFantasy Head Office, Siyasra Hotel, Seeduwa.</li>
          <li>CakeFantasy Bake House, Katunayaka.</li>
          <li>CakeFantasy Bake House, Raddolugama.</li>
          <li>CakeFantasy Bake House, Kotugoda.</li>
          <li>CakeFantasy Bake House, Ekala.</li>
          <li>CakeFantasy Bake House, Minuwangoda.</li>
          <li>CakeFantasy Bake House, Kurana.</li>
          <li>CakeFantasy Bake House, Gampaha.</li>
        </ul>

        <p style={{ fontWeight: "500", color: "red" }}>
          Order will be delivered one of above location without any delivery
          charge.
        </p>

        <div>
          <Table striped className="delivery-table">
            <thead>
              <tr>
                <th style={{ width: "60%" }}>City</th>
                <th>Delivery Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Athul Kotte</td>
                <td>Rs.1000</td>
              </tr>
              <tr>
                <td>Baththaramulla</td>
                <td>Rs.500</td>
              </tr>
              <tr>
                <td>Colombo 1 - 15</td>
                <td>Rs.1000</td>
              </tr>
              <tr>
                <td>Kelaniya</td>
                <td>Rs.900</td>
              </tr>
              <tr>
                <td>Dematagoda</td>
                <td>Rs.1000</td>
              </tr>
              <tr>
                <td>Ekala</td>
                <td>Rs.600</td>
              </tr>
              <tr>
                <td>Gampaha</td>
                <td>Rs.700</td>
              </tr>
              <tr>
                <td>Hendala</td>
                <td>Rs.700</td>
              </tr>
              <tr>
                <td>Hunupitiya</td>
                <td>Rs.700</td>
              </tr>
              <tr>
                <td>Ja-Ela</td>
                <td>Rs.600</td>
              </tr>
              <tr>
                <td>Kadana</td>
                <td>Rs.700</td>
              </tr>
              <tr>
                <td>Kaduwela</td>
                <td>Rs.800</td>
              </tr>
              <tr>
                <td>Katunayaka</td>
                <td>Rs.600</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default DeliveryArea;
