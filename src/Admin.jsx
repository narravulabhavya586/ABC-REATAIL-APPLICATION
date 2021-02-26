
import './App.css';
import React, { Component } from 'react';
import AmdinLogin from './login'
import AmdinForget from './forget'
import AdminUser from './adminuser'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Button, Badge, Tab, Nav, Row, Col, TabContainer } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
const  Admin =()=>{
    return (
      <div className="App" >
   
      <Navbar bg="dark" variant="dark" >
        <b style={{ color: 'gold' }}>ABC Banking </b>
        <Navbar.Collapse  >
        <Nav.Link>
          <Link style={{ color: 'white', fontSize: '13px' }} exact  to="/dashboard">Dashboard</Link>
        </Nav.Link>
        <Nav.Link>
          <Link style={{ color: 'white', fontSize: '13px' }} exact to="/use">UserDetails</Link>
        </Nav.Link>
        <Nav.Link>
          <Link style={{ color: 'white', fontSize: '13px' }} exact to="/new">Add New User</Link>
        </Nav.Link>
        {/* <Nav.Link>
          <Link style={{ color: 'gold', fontSize: '13px',marginLeft: '600px' }} to="/login">Login</Link>
        </Nav.Link> */}
        <Nav.Link>
          <Link style={{ color: 'gold', fontSize: '13px',marginLeft: '700px' }}to="/logout">LogOut</Link>
        </Nav.Link>
        </Navbar.Collapse>

      </Navbar>
      <br></br>
      <br></br>
    </div>
     
    )
  
}
export default Admin;
