import React, { useState } from 'react';
import { Button, Row, Col, Toast, Form, Navbar, Card, CardDeck ,Nav} from 'react-bootstrap';
import AdminFooter from './footer';
import './App.css';
import { Link, Redirect } from 'react-router-dom'
const AdminMain = (props) => {
    const [show, setShow] = useState(false);
    return (

        <div className="main">
            <div>
                <Navbar bg="dark" variant="dark" >
                    <b style={{ color: 'gold' }}>ABC Banking </b>
                    <Navbar.Collapse  >
                        <Nav.Link>
                            <Link style={{ color: 'gold', fontSize: '13px',marginLeft: '1000px' }} exact to="/new">New Registration</Link>
                        </Nav.Link>
                    </Navbar.Collapse>

                </Navbar>
            </div>
            <div style={{ marginLeft: '10%', marginRight: '10%' }}>
                <b style={{ marginLeft: '5%', color: 'white' }}>Call US:(+91)890456321<b style={{ marginLeft: '50%', color: 'white' }}>Working hours:</b></b>  <br></br>
                <i style={{ marginLeft: '5%', color: 'white' }}>Email:adc.bank@adc.ac.in  <i style={{ marginLeft: '50%', color: 'white' }}>Mon-Sun(24 hours)</i></i><br></br>
                <br></br>
                <br></br>
                <h1 style={{ color: 'black', marginLeft: '34%' }}><i >Abc Retail Banking</i></h1><hr></hr>
            </div>
            <br>
            </br><br></br>
            <div>
                <h6 style={{ marginLeft: '21%', color: 'gold' }}>Welcome to <i style={{ color: 'black' }}>Abc Retail Banking</i></h6>
                <i style={{ marginLeft: '21%', color: 'white' }}>ABC's internet banking portal provides personal banking
          services that gives </i>
                <br></br>
                <i style={{ marginLeft: '21%', color: 'white' }}>you complete control over all your banking demands online.</i>
            </div>
            <div style={{ marginLeft: '21%', color: 'gold' }}>
                <h5>Login with </h5>
                <Link class="btn btn-warning mr-2" to='/login'>Admin</Link>
                <Link class="btn btn-outline-warning mr-2" to='/login1'>User</Link>
            </div>
        </div>

    )
}

export default AdminMain;

