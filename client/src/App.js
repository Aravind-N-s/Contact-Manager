import React from 'react'
import _ from 'lodash'
import Popup from 'reactjs-popup'
import {connect} from 'react-redux'
import {Navbar, Container} from 'react-bootstrap' 
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

import Login from './Components/User/Login'
import Logout from './Components/User/Logout'
import Account from './Components/User/Account'
import Register from './Components/User/Register'

import ContactList from "./Components/Contact/List"

import ClassificationList from './Components/Classification/List'

class App extends React.Component {
    constructor(props){
        super(props)
        this.handleAuth=this.handleAuth.bind(this)
    }

    handleAuth = (props) =>{
        return(
            <div>
                {_.isEmpty(this.props.user) ? (
                    <>
                        <Popup trigger={<Link className="btn btn-success" to="/users/login">Login</Link>} position="left top"on="click">
                            <Login />
                        </Popup><br />
                        <Popup trigger={<Link style={{marginTop:5}} className="btn btn-success" to="/users/register">Register</Link>} position="left top"on="click">
                            <Register />
                        </Popup>
                    </>
                ) : (
                    <>
                        <Popup trigger={<Link style={{position: "absolute", top: "25%", right: 10}} className="btn btn-danger" to="/users/account">Account</Link>}position="top right"on="click">
                           <Account />                          
                        </Popup>
                    </>
                ) }
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
                {!_.isEmpty(this.props.user)?(
                    <Navbar className="font-italic font-weight-bold shadow-lg rounded bg-dark" fixed="bottom">
                        <Navbar.Brand><Link to="/" >
                            <h1>{this.props.user.username+"'s"} Contacts</h1>
                            </Link>{this.handleAuth()}
                        </Navbar.Brand>
                    </Navbar>
                ):(
                    <>
                        <div className="navbar font-italic font-weight-bold shadow-lg p-3 mb-5 rounded bg-danger"><h1>Contact Manager</h1> {this.handleAuth()} </div>
                    </>
                )}                        
                
                <>
                    {_.isEmpty(this.props.user) ? (
                            <Switch>
                                <>
                                    <Route exact strict path="users/register"/>        
                                    <Route exact strict path="users/login"/> 
                                    <img style={{marginLeft: "35%"}}src="/images/2.jpg"/>
                                </>   
                            </Switch>
                    ) : (      
                        <> 
                            {/* <Container>
                                <div className="row border">
                                    <ClassificationList/>
                                    <ContactList/>
                                </div>
                            </Container>     */}
                            <Switch>
                            <>
                                <Route exact strict path="/users/account"/>                     
                                <Route exact strict path="/users/logout" component={Logout}/>   
                                <Route path="/contact/new" exact strict />   
                                <Route path="/contact/info" exact strict/>   
                            </>
                            </Switch>
                        </> )}
                </>  
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      contact : state.contact,
      classification: state.classification
    }
  }
export default connect(mapStateToProps)(App)

