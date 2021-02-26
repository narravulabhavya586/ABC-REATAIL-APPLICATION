import React, { useState } from 'react';
import Forget from './forget'
import Email from './email';
import Mobile from './mobile';
import Password from './password';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, Alert,Row,Col,Toast } from 'react-bootstrap';
const AdminToast = (props) => {
    const [show, setShow] = useState(false);
    return (

        <div style={{ marginLeft: '39%' }}>
            
        <Row>
            
            <Col xs={6}>
                
                <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
                   
                    <Toast.Header>
                    
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Personal Home Page</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                    <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={2}>
                                            Radios
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                label="first radio"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1" 
                                                to="/login"
                                            />
                                             <Form.Check
                                                type="radio"
                                                label="third radio"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                                to="/login"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                    
                    <Button variant="primary">LOGIN</Button>
                    </Toast.Body>
                </Toast>
            
            </Col>
 
            {/* <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col> */}
        </Row> 
        </div >
    )
}

export default AdminToast ;

