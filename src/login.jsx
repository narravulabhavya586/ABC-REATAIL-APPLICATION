import React, { useState, useEffect } from 'react';
import Forget from './forget'
import Email from './email';
import Mobile from './mobile';
import Password from './password';
import { Navbar, NavDropdown, Nav, Button, Form, Card, Alert, Row, Col, Toast } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import Admin from './Admin';
import axios from "axios";
import AdminFooter from './footer';
const AmdinLogin = (props) => {
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
    const [admin, setAdmin] = useState([]);

    const emailChange = (e) => {
        setEmailVal(e.target.value);
    }
    const passChange = (e) => {
        setPassVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3003/admin");
        setAdmin(result.data);
    }
    const submit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{​​​​​​|}​​​​​​~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passVal);
        if (isEmailValid && isPasswordValid) {
            for (let i = 0; i < admin.length; i++) {
                debugger
                if (emailVal == admin[i].email && passVal == admin[i].password) {
                    return props.history.push('/use');

                } else {
                    if (i == admin.length - 1) {
                        alert("User name and password not matched");
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }
    const login1 = () => {
        props.history.push('/forget');
    }
    return (

        <div >
            {/* <Admin/> */}
            <Navbar bg="dark" variant="dark" >
                <b style={{ color: 'gold' }}>ABC Banking </b>
                <Navbar.Collapse  >
                </Navbar.Collapse>

            </Navbar>
            <div style={{ marginLeft: '39%', marginTop: '5%' }}>
                <Card style={{ width: '23rem' }}>
                    <Card.Body>
                        <Card.Title>Amdin Log In</Card.Title>

                        <Card.Text>
                            <div className='text' style={{ fontSize: '13px', color: 'gray' }}>Please check that you are visiting the Admin Login</div>
                        </Card.Text>

                        <Form>
                            {
                                <Email
                                    emailVal={emailVal}
                                    emailChange1={emailChange}
                                />
                            }
                        </Form>
                        <Password
                            passVal={passVal}
                            passChange1={passChange}
                        />
                        <div>
                            {showAlert === true && (
                                <Alert variant="success">Sucesss</Alert>
                            )}{(showAlert === false &&
                                <Alert variant="warning">failure</Alert>)}
                        </div>
                        <Button variant="warning" size="lg" block onClick={submit} >
                            Login
                    </Button>
                        <br></br>
                        <div className="link" style={{ marginRight: '20px' }}>
                            <Button variant="link" style={{ marginRight: '170px', color: 'gold', fontSize: '13px' }}
                                onClick={login1}>Forget Password?</Button>

                            {/* <Link to="/forget" style={{ color: 'gold', fontSize: '13px' }}>Forget Password?</Link> */}
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>

            </div>
            <div>
                <AdminFooter />
            </div>

        </div >
    )
}
export default AmdinLogin;

