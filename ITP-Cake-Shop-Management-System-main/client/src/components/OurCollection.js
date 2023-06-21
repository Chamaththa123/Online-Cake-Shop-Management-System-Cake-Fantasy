import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from './Layout/Header'
import Footer from './Layout/Footer'


const OurCollection = () => {



  const [oitems, setoitems] = useState([]);
  console.log(oitems);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getOitems();
  }, [id]);
  const getOitems = () => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setoitems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={{backgroundColor:'white'}}>
      <Header/>

      {oitems?.map((oitems, id) => {
                    return (
                      <>
                        <tr style={{ borderStyle: "dotted", fontSize: "15px" }}>
                          <th scope="row" style={{ borderStyle: "dotted" }}>
                            {id + 1}
                          </th>

                          <td style={{ borderStyle: "dotted" }}>
                            <a
                              href={`/oitem/employee/${oitems._id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {oitems.item_code}
                            </a>
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                            <a
                              href={`/oitem/employee/${oitems._id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {oitems.item_name}
                            </a>
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                            {oitems.category}
                          </td>
                          
                          <td
                            style={{ borderStyle: "dotted" }}
                            color="success"
                            pill
                          >
                            <button
                              status={oitems.status}
                              style={{ width: "10px", float: "left" }}
                            />
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                            Rs.{oitems.price?.toFixed(2)}
                          </td>
                          <td style={{ borderStyle: "dotted" }}>
                          <img
                    src={`/uploads/${oitems.image}`}
                    href={`/oitem/${oitems._id}`}
                    alt="sds"
                    width="235px"
                    height="200px"
                  />
                          </td><a href={`/Product/${oitems._id}/Order`}><button>add to cart</button></a>
                        </tr>
                      </>
                    );
                  })}

      <Footer/>
    </div>
  )
}

export default OurCollection
