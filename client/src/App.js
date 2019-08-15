import React from 'react'
import _ from 'lodash'
import Popup from 'reactjs-popup'
import {connect} from 'react-redux'
import {Navbar, Container, Button, Row, Col } from 'react-bootstrap' 
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

import Login from './Components/User/Login'
import Logout from './Components/User/Logout'
import Account from './Components/User/Account'
import Register from './Components/User/Register'

import ContactList from "./Components/Contact/List"
import ContactShow from "./Components/Contact/Show"
import ContactNew from "./Components/Contact/New"

import ClassificationList from './Components/Classification/List'
import ClassificationNew from './Components/Classification/New'

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
                        <Popup trigger={<Link to="/users/login"><Button style={{width:75}} variant="success">Login</Button></Link>} position="left top"on="click">
                            <Login />
                        </Popup><br />
                        <Popup trigger={<Link  to="/users/register"><Button style={{marginTop:10,width:75}} variant="success">Register</Button></Link>} position="left top"on="click">
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
        const Card = () =>{
            return(
                <div style={{width:"200px"}}className="card">
                    <h3 className="list-group-item">Login</h3>
                    <h5 className="list-group-item">email: user1@contact.com password:contactuser1</h5>
                    <h5 className="list-group-item">email: user2@contact.com password:contactuser2</h5>
                </div>
            )
        }
        return (
            <BrowserRouter>
                {!_.isEmpty(this.props.user)?(
                    <Navbar className="font-italic font-weight-bold shadow-lg rounded bg-dark" fixed="bottom">
                        <Navbar.Brand><Link to="/" >
                            <h1 className="text-danger">{this.props.user.username+"'s"} Contacts</h1>
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
                                    <Route exact strict path="users/login"/> 
                                    <Route exact strict path="users/register" render={() => (<Redirect to="/"/>)}/>        
                                    <img style={{marginLeft: "35%"}} src="/images/2.jpg"/>
                                    <audio src="/images/2.mp3" autoPlay/>
                                    <Popup trigger={<button style={{marginLeft:"45%"}} className=" bg-info rounded h1"> Info </button>} position = "top right" on='click'>
                                    <div>
                                        <Card/>                       
                                    </div>
                                </Popup>
                                </>   
                            </Switch>
                    ) : (      
                        <div> 
                            <Container>
                                <Row style={{marginTop:"10px"}}>
                                    <Col><ClassificationList/></Col> 
                                    <Col><ContactList/></Col>
                                </Row>
                            </Container>    
                            <Switch>
                            <>
                                <Route exact strict path="/users/account"/>                     
                                <Route exact strict path="/users/logout" component={Logout}/>   
                                <Route exact strict path="/new/:id" component={ContactNew}/>   
                                <Route exact strict path="/show/:id" component={ContactShow}/>   
                                <Route path="/classification/new" exact strict component={ClassificationNew}/>   
                            </>
                            </Switch>
                        </div> )}
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

