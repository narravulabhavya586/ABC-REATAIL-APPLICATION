import React, { useState,useEffect} from 'react';
import axios from "axios";
import Admin from './Admin';
import AdminView from './adminView'
import { Table } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
const AdminUser = () => {
    const [users,setUser]=useState([]);
    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async ()=> {
        const res = await axios.get("http://localhost:3003/users");
        setUser(res.data);
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    return (
        <div>
            <Admin/>
            <div style={{ marginLeft: '20px' ,marginTop:'60px' }}>
            <Table striped bordered hover variant="dark" style={{ width: '78rem' }}>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Adhara No</th>
                        <th>PanCard</th>
                        <th>AccountNo</th>
                        <th>Branch</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user,index)=>(
                           <tr>
                           <th>{index+1}</th>
                           <td>{user.name}</td>
                           <td>{user.fathername}</td>
                           <td>{user.email}</td>
                           <td>{user.phone}</td>
                           <td>{user.adharano}</td>
                           <td>{user.pan}</td>
                           <td>{user.accountno}</td>
                           <td>{user.bankLocation}</td>
                         
                           <td>
                           <Link class="btn btn-warning mr-2" to={`/users/${user.id}`}>View</Link>
                           <Link class="btn btn-outline-warning mr-2" onClick={() => deleteUser(user.id)}>Del</Link>
                           </td>
                           </tr>

                       ))
                   }
                </tbody>
            </Table>
            </div>
        </div>
    )
}
export default AdminUser;