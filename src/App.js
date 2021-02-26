import './App.css';
import React, { Component } from 'react';
import AmdinLogin from './login'
import AmdinForget from './forget'
import AdminToast from './toast'
import AdminMain from './main'
import AdminUser from './adminuser'
import AdminDash from './admindash'
import UserLogin from './login1'
import UserForget from './forget1'
import UserView1 from './UserView'
import UserView2 from './userview2'
import UserPage from './userpage'
import UserMoney from './currentmoney'
import SavingMoney from './savingmoney'
import UserMoney1 from './currentmoney1'
import SavingMoney1 from './savingmoney1'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Button, Badge, Tab, Nav, Row, Col, TabContainer, Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Admin from './Admin';
import AdminView from './adminView';
import AddUser from './adduser';
import UserDetail from './userDetail';
class App extends Component {


  render() {

    return (
      <div className="App" style={{ textcolor: 'yellow' }}>
        <Router>
          <Switch>
            <Route exact path="/"><Redirect to="/main" /></Route>
            <Route path="/main" component={AdminMain}></Route>
            <Route path="/admin"  component={Admin}></Route>
            <Route path="/login"  component={AmdinLogin}></Route>
            <Route path="/forget" component={AmdinForget}></Route>
            <Route path="/logout" component={AmdinLogin}></Route>
           
            <Route path="/use" component={AdminUser} ></Route>
            <Route path="/new" component={AddUser} ></Route>
            <Route path="/dashboard" component={AdminDash} ></Route>
            <Route path="/users/:id" component={AdminView}></Route>



            <Route path="/login1"  component={UserLogin}></Route>
            <Route path="/logout1" component={UserLogin}></Route>
            <Route path="/forget1" component={UserForget}></Route>

            <Route path="/userview1/:id" component={UserView1}></Route>
            <Route path="/userview2/:id" component={UserView2}></Route>
            <Route path="/userpage" component={UserPage}></Route>
            <Route path="/usermoney" component={UserMoney}></Route>
            <Route path="/savingmoney" component={SavingMoney}></Route>
            <Route path="/usermoney1" component={UserMoney1}></Route>
            <Route path="/savingmoney1" component={SavingMoney1}></Route>








            {/* <Route path="/admintoast"></Route> */}
            
            <Route path="**">
              <div>404 not found!!!!!!</div>
            </Route>
          </Switch>
        </Router>

      </div >
    )
  }
}
export default App;
