import React from 'react'
import _ from 'lodash'
import Popup from 'reactjs-popup'
import {connect} from 'react-redux'
import {Navbar, Container} from 'react-bootstrap' 
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

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
                        <Popup trigger={<Link to="/users/login">Login</Link>} position="right top"on="hover">
                            <Login />
                        </Popup><br />
                        <Popup trigger={<Link to="/users/register">Register</Link>} position="right top"on="hover">
                            <Register />
                        </Popup>
                    </>
                ) : (
                    <>
                        <Popup trigger={<Link to="/users/account">Account</Link>}position="top left"on="hover">
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
                    <Navbar bg="dark" fixed="bottom">
                        <Navbar.Brand ><Link to="/" >
                            <h1>{this.props.user.username+"'s"} Contacts</h1>
                            </Link>{this.handleAuth()}
                        </Navbar.Brand>
                    </Navbar>
                ):(
                    <>
                        <h1>Contact Manager</h1> <span styles={{float: 'right'}}>{this.handleAuth()}</span>
                    </>
                )}                        
                
                <>
                    {_.isEmpty(this.props.user) ? (
                            <Switch>
                                <>
                                    <Route path="users/register" exact={true} strict={true} />        
                                    <Route path="users/login" exact={true} strict={true}/> 
                                    <Route render={() => {
                                        return <h2>path not exist</h2>
                                    }} exact={true}/>
                                </>   
                            </Switch>
                    ) : (      
                        <> 
                            <Container>
                                <div className="row">
                                    <ClassificationList />
                                    <ContactList />
                                </div>
                            </Container>    
                            <Switch>
                            <>
                                <Route path="/users/account" exact strict component={Account}/>                     
                                <Route path="/users/logout" exact strict component={Logout}/>   
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

