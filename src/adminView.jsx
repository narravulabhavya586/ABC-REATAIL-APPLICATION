import React, { Fragment,useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import Admin from './Admin';
import { Link, useParams } from 'react-router-dom';
 
const AdminView = (props) => {
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
        ificno: "",
        bankLocation: "",
        ctype:"",
        stype:"",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
 
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    return (
        <div>
            <Admin/>
        <div style={{ marginLeft: '39%' }}>
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title className='demo'>User</Card.Title><br />
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item>Name:{user.name}</ListGroup.Item>
                            {/* <ListGroup.Item>User name: {user.username}</ListGroup.Item> */}
                            <ListGroup.Item>Email:{user.email}</ListGroup.Item>
                            <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                            <ListGroup.Item>Saving Account NO: {user.stype}</ListGroup.Item>
                            <ListGroup.Item>Current  Account NO: {user.ctype}</ListGroup.Item>
                            {/* </div> */}
                            <br />
                            <Link className="btn btn-warning" to="/use">Back to Home</Link>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    
    )
 
}
export default AdminView;