import './App.css';
import Login from './login'
import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
const  Email = (props) => {
        return (
            <Form>
                <Form.Group>
                    <Form.Label style={{ marginRight: '320px', fontSize: '12px' }}>Email</Form.Label>
                    <Form.Control type="email"
                        size="lg" block
                        value={props.emailVal}
                        onChange={props.emailChange1} 
                        />
                </Form.Group>
            </Form>
        )
}
export default Email;
