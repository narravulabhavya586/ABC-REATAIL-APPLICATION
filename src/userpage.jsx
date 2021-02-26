import React, { Fragment,useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import {  Button } from 'react-bootstrap';

import axios from 'axios';
 
 
function Userpage (props){
    
   
    useEffect(()=>{
        
      
        let user =sessionStorage.getItem("user")
        user=JSON.parse(user);
        props.history.push(`/userview1/${user.id}`);
       
        
    },[]);
    // const submit=()=>{
    //     let user =sessionStorage.getItem("user")
    //     user=JSON.parse(user);
    //     props.history.push(`/userview1/${user.id}`);
      
    // }

 
 return(
     <h1>bhvaya</h1>
 )
}
 
export default Userpage;