import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './AdminHeader.css'
import user from '../../images/baker.png';
import notification from '../../images/msg-notification.png';
import order from '../../images/order.png';
import { useAuth } from "../../context/auth";

function AdminHeader() {

    const [auth, setAuth] = useAuth();

    const [UR_contact_Count, setURcontact_Count] = useState([]);
    useEffect(() => {
        getURcontact_Count();
    }, []);
    const getURcontact_Count = () => {
        axios
            .get("http://localhost:8000/UnreadContactCount")
            .then((res) => {
                setURcontact_Count(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <Navbar className="bg-body-tertiary" style={{ boxShadow: 'none', position: 'fixed', width: '82%', marginLeft: '-0%' }}>
            <Container className="header-container">
                <Navbar.Brand href="#home" style={{ fontSize: '20px', fontWeight: 'bold', color: '#b666d2' }}>Cake Fantasy Cake Shop</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <div style={{marginRight:'-6px'}}>
                    <button
                  className="btn-main-card"
                  style={{ backgroundColor: "#B666D2" ,height:'25px',width:'25px'}}
                > <b> {UR_contact_Count}</b></button>
                       
                    </div>
                    <img src={order} alt='user' className='notification' />
                    <div style={{marginRight:'-6px'}}>
                    <button
                  className="btn-main-card"
                  style={{ backgroundColor: "#B666D2" ,height:'25px',width:'25px'}}
                > <b> {UR_contact_Count}</b></button>
                       
                    </div>
                    <img src={notification} alt='user' className='notification' />
                    <div className='user-name'>
                        {auth?.user?.name}
                    </div>
                    <img src={user} alt='user' className='user' />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminHeader;