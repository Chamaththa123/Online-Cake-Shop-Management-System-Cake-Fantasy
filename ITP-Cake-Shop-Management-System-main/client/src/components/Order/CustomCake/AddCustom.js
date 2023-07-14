import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddCustom() {
    return (
        <div>
            <Header />
            <hr style={{ marginTop: "-10px" }}></hr>

            <div style={{ margin: '50px' }}>
                <br></br>
                <center><h2 style={{ fontWeight: '600' }}>Design Your Dream Cake and Flower Bouquets</h2></center>
                <br></br>
                <p style={{ fontSize: '22px' }}>For creating your own custom cakes, the following are the steps that are required to be followed</p>
                <br></br>

                <ul>
                    <li>Drop your design on us (with specifications) and we’ll be please to take care of your order.</li>
                    <li>Our concern team member will contact you with quotations just after you’ll place order.</li>
                    <li>We have expertise to bake all your dream cakes that will fulfil you dreamy desires.</li>
                    <li>With the help of best qualified designer, we are Srilanka’s best baker of all kind of cakes.</li>
                </ul>

                <div style={{ margin: '100px' }}>
                    <Form>
                        <Row className="mb-1">
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email :</Form.Label>
                                    <Form.Control type="email" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-1">
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Contact Number :</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Order Type :</Form.Label>
                                    <Form.Select
                                    aria-label="Default select example"
                                    name="category"
                                >
                                    <option>Select Category</option>
                                    <option value={"Flowers"}>Flowers</option>
                                    <option value={"Chocolate"}>
                                        Chocolate
                                    </option>
                                    <option value={"Cartoon Cake"}>Cartoon Cake</option>
                                    <option value={"Anniversary Cake"}>Anniversary Cake</option>
                                    <option value={"Icing Cake"}>Icing Cake</option>
                                    <option value={"Kids Cake"}>Kids Cake</option>
                                    <option value={"Cup Cake"}>Cup Cake</option>
                                    <option value={"Wedding Cake"}>Wedding Cake</option>
                                    <option value={"Flowers"}>Flowers</option>
                                    <option value={"Bday Cake"}>B'day Cake</option>
                                    <option value={"Print Cake"}>Print Cake</option>


                                </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-1">
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Quantity :</Form.Label>
                                    <Form.Control type="number" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            <Col>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Required Date :</Form.Label>
                                    <Form.Control type="date" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-1">
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Image :</Form.Label>
                                    <Form.Control type="file" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                            
                        </Row>

                        <Row className="mb-1">
                        <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Description :</Form.Label>
                                    <Form.Control
                                as="textarea"
                                aria-label="With textarea"
                                rows="4"
                                name="description1"
                               
                                placeholder="(Plain text only)"
                            />
                                </Form.Group>
                            </Col>
                        
                            
                        </Row>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default AddCustom
