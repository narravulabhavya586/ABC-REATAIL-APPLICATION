import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import User from './User';
import { useParams, Link } from 'react-router-dom';

function SavingMoney(props) {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        balance:''

    });
    const [amount, setAmount] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const res = sessionStorage.getItem('user');
        let user = JSON.parse(res);
        getUser(user.id);
    }, []);

    const getUser = async (id) => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }

    const onSubmit = async e => {
        e.preventDefault();
        user.balance = parseInt(user.balance) + parseInt(amount);
        await axios.put(`http://localhost:3003/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount added successfully');

    }
    const change = (e) => {
        setAmount(e.target.value);

    }
    return (
        <div className='currentadd'>
            <User/>
            <div style={{ marginLeft: '45%', marginTop: '5%' }}>
           <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Text>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{  marginRight: '200px', fontSize: '15px'}}>UserID: {user.name}</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicEBal">
                            <Form.Label style={{  marginRight: '100px', fontSize: '15px' }}>Savings Balance: {user.balance}</Form.Label>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ marginRight: "270px" }}>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Amount" onChange={change} />
                        </Form.Group>
                        <Button class="btn btn-outline-warning" variant="warning" onClick={onSubmit} block >Submit</Button>
                    </Form>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                </div>
        
        </div>
    )
}
export default SavingMoney;