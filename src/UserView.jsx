import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert, Card, ListGroup } from 'react-bootstrap';
import User from './User';
const UserView1 = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        email: "",
        balance: ' ',
        ctype: ' ',
        stype: ' ',
        currentBalance: 0,
    });
    const [showButton, setShowBotton] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push( '/usermoney');
    }
    const currentAmount = () => {
        props.history.push('/savingmoney');
    }
    const userButton1 = () => {
        props.history.push( '/usermoney1');
    }
    const currentAmount1 = () => {
        props.history.push('/savingmoney1');
    }
    const currentButton = () => {
        setShowBotton(true);
    }
    const savingsButton = () => {
        setShowBotton(!true);
    }


    return (
        <center>
            <div>
                <User />
                <div style={{ marginLeft: '8%', marginTop: '5%' }}>
                    <Card border="gold" style={{ width: '25rem' }}>
                        <Card.Title>User:{id}</Card.Title>
                        <div  style={{ marginRight: '170px' }}>
                        <Button variant="white" onClick={currentButton}>Current</Button>
                        <Button variant="white" onClick={savingsButton}>savings</Button><hr />
                        </div>
                        {
                            showButton === true && (

                                <div>
                                    <ListGroup>
                                        <ListGroup.Item>Name:{user.name}</ListGroup.Item>
                                        <ListGroup.Item>Email:{user.email}</ListGroup.Item>
                                        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                        <ListGroup.Item>Account NO:{user.ctype}</ListGroup.Item>
                                        <ListGroup.Item>current Balance :{user.currentbalance}</ListGroup.Item>
                                        <br />
                                    </ListGroup>
                                    <br></br>
                                    <button class="btn btn-outline-warning " onClick={userButton}>Add Amount</button>
                                    <button class="btn btn-outline-warning " onClick={userButton1}>Withdraw Amount</button>

                                </div>
                            )}{(showButton === false &&
                                <div>
                                <ListGroup>
                                    <ListGroup.Item>Name:{user.name}</ListGroup.Item>
                                    <ListGroup.Item>Email:{user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account no: {user.stype}</ListGroup.Item>
                                    <ListGroup.Item>Savings Balance: {user.balance}</ListGroup.Item>
                                    <br />
                                </ListGroup>
                                <br></br>
                                <button class="btn btn-outline-warning " onClick={currentAmount}>Add Amount</button>
                                <button class="btn btn-outline-warning " onClick={currentAmount1}>Withdraw Amount</button>

                            </div>)}
                        
                       

                    </Card>
                </div>
            </div>

        </center>
    )
}
export default UserView1;


