import React, { useState,useEffect} from 'react';
import axios from "axios";
import Admin from './Admin';
import AdminView from './adminView'
import { Card } from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom'
const UserDetail = () => {
    const [user,setUser]=useState({
        id:'',
});
const { id } = useParams();
    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async ()=> {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
   

    return (
        <div>
            <Admin/>
            <div style={{ marginLeft: '20px' ,marginTop:'60px' }}>
                <Card style={{ width: '24rem' }}>
                    <Card.Title>Account Details</Card.Title>
                  
                          <b>
                           <Link class="btn btn-warning mr-2" to='/userview1'>Current Account</Link>
                           <Link class="btn btn-outline-warning mr-2" to='/userview2'>Saving Account</Link>
                          
                           </b>
                     
                   </Card>
                
            </div>
        </div>
    )
}
export default UserDetail;