import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './AdminHeader.css'
import user from '../../images/medical-team.png';
import notification from '../../images/notification.png';

function AdminHeader() {
    return (
        <Navbar className="bg-body-tertiary" style={{ boxShadow: 'none', position: 'fixed', width: '82%', marginLeft: '-0%' }}>
            <Container className="header-container">
                <Navbar.Brand href="#home" style={{ fontSize: '20px', fontWeight: 'bold', color: '#b666d2' }}>Cake Fantasy Cake Shop</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <img src={notification} alt='user' className='notification' />
                    <div className='user-name'>
                        User Name
                    </div>
                    <img src={user} alt='user' className='user' />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdminHeader;