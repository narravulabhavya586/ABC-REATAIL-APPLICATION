
import './App.css';
import React, { Component } from 'react';
import UserLogin from './login1'
import UserForget from './forget1'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Button, Badge, Tab, Nav, Row, Col, TabContainer } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
const  User =()=>{ 
    return (
      <div className="App" >
   
      <Navbar bg="dark" variant="dark" >
        <b style={{ color: 'gold' }}>ABC Banking </b>
        <Navbar.Collapse  >
        <Nav.Link>
          <Link style={{ color: 'white', fontSize: '13px' }} exact  to="/userdetail">AccountDetails</Link>
        </Nav.Link>
        {/* <Nav.Link>
          <Link style={{ color: 'white', fontSize: '13px' }} exact to="/">UserDetails</Link>
        </Nav.Link>
        <Nav.Link>
          <Link style={{ color: 'white', fontSize: '13px' }} exact to="/new">Add New User</Link>
        </Nav.Link> */}
        <Nav.Link>
          <Link style={{ color: 'gold', fontSize: '13px',marginLeft: '800px' }} to="/login1">Login</Link>
        </Nav.Link>
        <Nav.Link>
          <Link style={{ color: 'gold', fontSize: '13px' }}to="/logout1">LogOut</Link>
        </Nav.Link>
        </Navbar.Collapse>

      </Navbar>
      <br></br>
      <br></br>
    </div>
     
    )
  
}
export default User;
