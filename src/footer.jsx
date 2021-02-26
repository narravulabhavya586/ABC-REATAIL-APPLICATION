     
import './App.css';
import React, { Component } from 'react';
import AmdinLogin from './login'
import AmdinForget from './forget'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Button, Badge, Tab, Nav, Row, Col, TabContainer } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
const  AdminFooter =()=>{
    return (
      <div  >
   
   <div style={{ marginLeft: '100px', marginBottom: '1px' }}  >
        <footer className="blockquote-footer">
          © 2020 - 2021 abc.retailbank.ac.in
      </footer>
      </div>
      <br></br>
      <br></br>

    </div>
     
    )
  
}
export default AdminFooter;
