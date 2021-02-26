import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert, Card ,ListGroup} from 'react-bootstrap';
import User from './User';
const UserView2 = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        email: "",
        balance: ' ',
        cType: ' ',
        sType: ' ',
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
    const currentAmount = () => {
        props.history.push('/currentadd');
    }
   

    return (
        <center>
            <div>
                <User />
                <div style={{ marginLeft: '8%', marginTop: '5%' }}>
                    <Card border="gold" style={{ width: '25rem' }}>
                        <Card.Title>User:{id}</Card.Title>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item>Name:{user.name}</ListGroup.Item>
                                    <ListGroup.Item>Email:{user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Current Balance: {user.currentBalance}</ListGroup.Item>
                                    <br />
                                </ListGroup>
                                <br></br>
                                <button class="btn btn-outline-warning " onClick={currentAmount}>Add Amount</button>

                            </div>
                       

                    </Card>
                </div>
            </div>

        </center>
    )
}
export default UserView2;


