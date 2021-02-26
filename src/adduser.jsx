import React, { Fragment, useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import axios from 'axios';
import Admin from './Admin'
import AdminFooter from './footer';
import { Link } from 'react-router-dom';

const AddUser = (props) => {
    const [user, setUser] = useState({
        name: "",
        fathername: "",
        email: "",
        password: "",
        phone: "",
        adharano: "",
        pan: "",
        state:"",
        address: "",
        accountno: "",
        ifscno: "",
        bankLocation: "",
    });

    const { name, username, email, phone, pan,fathername,adharano,address,state,accountno,ifscno,bankLocation,password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        props.history.push('/use');
    };
    return (
        <div>
            <div>
               
            </div>
            <br></br>
            <div style={{ marginLeft: '19%' }}>
                <Card border="gold"  style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Title className='demo'>New User </Card.Title><br />
                        <Card.Text>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Name</Form.Label>
                                    <Form.Control type="text"   size="sm" name="name" value={name}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group  as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '250px', fontSize: '15px' }}>Father Name</Form.Label>
                                    <Form.Control type="text" size="sm" name="fathername" value={fathername}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                </Form.Row>
                                <Form.Row>

                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '270px', fontSize: '15px' }}>Phone no</Form.Label>
                                    <Form.Control type="text" size="sm" name="phone" value={phone}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Address</Form.Label>
                                    <Form.Control type="mobile" size="sm" name="address" value={address}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                <Form.Group  as={Col}controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Email</Form.Label>
                                    <Form.Control type="mobile" size="sm" name="email" value={email}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Password</Form.Label>
                                    <Form.Control type="text" size="sm" name="password" value={password}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label style={{ marginRight: 'px', fontSize: '15px' }}>AdharaNo</Form.Label>
                                        <Form.Control type="text"  name="adharano" value={adharano}
                                            onChange={e => onInputChange(e)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBasicEmail">
                                        <Form.Label style={{ marginRight: 'px', fontSize: '15px' }}>Pancard</Form.Label>
                                        <Form.Control type="text"  name="pan" value={pan}
                                            onChange={e => onInputChange(e)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" defaultValue="Choose..."  name="state" value={state}  
                                        onChange={e => onInputChange(e)}>
                                            <option>Choose...</option>
                                            <option>Ap</option>
                                            <option>Tamil Nadiu</option>
                                            <option>Up</option>
                                            <option>Odisaa</option> 
                                            <option>Telengana</option>
                                           
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: 'px', fontSize: '15px' }}>Account No</Form.Label>
                                    <Form.Control type="text"  name="accountno" value={accountno}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group  as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: 'px', fontSize: '15px' }}>Ifsc No</Form.Label>
                                    <Form.Control type="text"  name="ifscno" value={ifscno}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group  as={Col} controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: 'px', fontSize: '15px' }}>Branch</Form.Label>
                                    <Form.Control type="text" name="bankLocation" value={bankLocation}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                </Form.Row>
                               
                                <button className="btn btn-warning btn-block" >Add User</button>

                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <AdminFooter  />
        </div>

    )
}
export default AddUser;