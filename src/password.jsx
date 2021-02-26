import './App.css';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
const Password =(props)=> {
   
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ marginRight: '270px', fontSize: '12px' }}>Password</Form.Label>
                    <Form.Control type="password"
                        size="lg" block
                        value={props.passVal}
                        onChange={props.passChange1}
                         />
                </Form.Group>
            </Form>
        )
}
export default Password;
