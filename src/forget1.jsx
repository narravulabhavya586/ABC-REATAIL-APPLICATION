import './App.css';
import Email from './email';
import Mobile from './mobile';
import User from './User'
import axios from "axios";
import React, { useState, useEffect} from 'react';
import { Button, Form, Card ,Navbar,Nav} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
const AdminForget = (props) => {

    const [showMobile, setShowMobile] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [emailVal, setEmailVal] = useState('');
    const [users, setUser] = useState([]);
    const email = () => {
        setShowMobile(!true)
    }
    const mobile = () => {
        setShowMobile(true)
    }
    const emailChange = (e) => {
        // const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{​​​​​​|}​​​​​​~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // this.isEmailValid = emailRegex.test(e.target.value);
        // console.log("---isvalid", this.isEmailValid);
        setEmailVal(e.target.value);
    }
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    }
    const submit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{​​​​​​|}​​​​​​~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isEmailValid = emailRegex.test(emailVal);
        if (isEmailValid) {
            for (let i = 0; i < users.length; i++) {
                debugger
                if (emailVal == users[i].email) {

                    return props.history.push('/login1');

                } else {
                    if (i == users.length - 1) {
                        alert("User name not matched");
                    }
                }
            }
        } else {
            alert(" invalid");
        }

    }

    return (
        <div>
            {/* <User/> */}
            <Navbar bg="dark" variant="dark" >
                <b style={{ color: 'gold' }}>ABC Banking </b>
                <Navbar.Collapse  >
                    <Nav.Link>
                        <Link style={{ color: 'gold', fontSize: '13px',marginLeft: '1000px' }} to="/login1">Login</Link>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>

            <div style={{ marginLeft: '39%', marginTop: '5%' }}>
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Reset Login Password</Card.Title>

                        <Card.Text>
                            <br></br>
                            <Card variant="light" style={{
                                fontSize: '13px', width: '18rem', height: '75px',
                                backgroundColor: '#fff7e6', marginLeft: '12%', color: ' #ffaa00'
                            }}>
                                <p>For security purposes, no withdrawals are permitted for 24 hours after modification of security methods.</p>
                            </Card>
                        </Card.Text>


                        <Form>
                            <div style={{ marginRight: '170px' }}>
                                <Button variant="btn-Light" onClick={email}>Email</Button>


                                <Button variant="btn-Light" onClick={mobile}>Mobile</Button><hr></hr>
                            </div>
                            <Form.Text style={{ marginRight: '130px' }}>
                                <small>Enter the account details to reset the password.</small>
                            </Form.Text>
                            {
                                showMobile ?
                                    <Mobile />
                                    :
                                    <Email
                                        emailVal={emailVal}
                                        emailChange1={emailChange}
                                    />
                            }
                        </Form>

                        <Button variant="warning" size="lg" block onClick={submit}>
                            Next
                                 </Button>


                        <br></br>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )

}
export default AdminForget;
