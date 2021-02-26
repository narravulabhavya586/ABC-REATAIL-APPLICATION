import React, { useState,useEffect} from 'react';
import axios from "axios";
import Admin from './Admin';
import AdminView from './adminView'
import { Table } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
const AdminDash = () => {
    const [admin,setAdmin]=useState([]);
    useEffect(()=>{
       loadAdmin();
    },[]);

    const loadAdmin = async ()=> {
        const res = await axios.get("http://localhost:3003/admin");
        setAdmin(res.data);
    };
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
                        <th>Pincode</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       admin.map((admins,index)=>(
                           <tr>
                           <th>{index+1}</th>
                           <td>{admins.name}</td>
                           <td>{admins.fathername}</td>
                           <td>{admins.email}</td>
                           <td>{admins.phone}</td>
                           <td>{admins.adharano}</td>
                           <td>{admins.pincode}</td>
                           <td>{admins.state}</td>
                          
                           </tr>

                       ))
                   }
                </tbody>
            </Table>
            </div>
        </div>
    )
}
export default AdminDash;