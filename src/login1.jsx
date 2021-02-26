import React, { useState, useEffect } from 'react';
import Forget from './forget'
import Email from './email';
import Mobile from './mobile';
import Password from './password';
import User from './User'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, Alert,Navbar } from 'react-bootstrap';
const UserLogin = (props) => {
    console.log("i am props", props)
    const [showMobile, setShowMobile] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
    const [users, setUser] = useState([]);

    const email = () => {
        setShowMobile(!true)

    }
    const mobile = () => {
        setShowMobile(true)
    }
    const emailChange = (e) => {
        setEmailVal(e.target.value);
    }
    const passChange = (e) => {
        setPassVal(e.target.value);
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
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passVal);
        if (isEmailValid && isPasswordValid) {
            for (let i = 0; i < users.length; i++) {
                debugger
                if (emailVal == users[i].email && passVal == users[i].password) {
                    sessionStorage.setItem("user",JSON.stringify(users[i]));
                    return props.history.push('/userpage');

                } else {
                    if (i == users.length - 1) {
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
        props.history.push('/forget1');
    }
    return (
        <div>
            {/* <User/> */}
            <Navbar bg="dark" variant="dark" >
                <b style={{ color: 'gold' }}>ABC Banking </b>
                <Navbar.Collapse  >
                </Navbar.Collapse>

            </Navbar>

            <div style={{ marginLeft: '39%' ,  marginTop: '5%'}}>

                <Card  border="gold" style={{ width: '23rem' }}>
                    <Card.Body>
                        <Card.Title  style={{ marginLeft:'41%' }}>Log In</Card.Title>
                        <Card.Text>
                            <div className='text' style={{ fontSize: '13px', color: 'gray', marginLeft:'5%' }}>Please check that you are visiting the Admin Login</div>
                        </Card.Text>
                        <Form>
                            <div style={{ marginRight: '170px' }}>
                                <Button variant="btn-Light" onClick={email}>Email</Button>
                                <Button variant="btn-Light" onClick={mobile}>Mobile</Button><hr></hr>
                            </div>
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
                        <div className="link" style={{ marginRight: '10px' }}>
                            <Button variant="link" style={{ marginRight: '170px', color: 'gold', fontSize: '13px' }}
                                onClick={login1}>Forget Password?</Button>

                            {/* <Link to="/forget" style={{ color: 'gold', fontSize: '13px' }}>Forget Password?</Link> */}
                        </div>
                    </Card.Body>
                </Card>
            </div >
        </div>
    )
}
export default UserLogin;

