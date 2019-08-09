import React from 'react'
import _ from 'lodash'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Login from './Components/User/Login'
import Logout from './Components/User/Logout'
import Account from './Components/User/Account'
import Register from './Components/User/Register'

import ContactNew from  './Components/Contact/New'
import ContactEdit from './Components/Contact/Edit'
import ContactList from './Components/Contact/List'
import ContactShow from './Components/Contact/Show'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isAuthenticated: false
        }
        this.handleAuth=this.handleAuth.bind(this)
    }

    handleAuth = (props) =>{
        return(
            <div>
                {_.isEmpty(this.props.user) ? (
                    <div> 
                        <Link to="/register">Register</Link><br />
                        <Link to="/login">Login</Link><br />
                    </div>
                ) : (
                    <Link to="/account">Account</Link>
                ) }
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
                <span><Link to="/" >Contact Manager</Link>{this.handleAuth()}</span>
                <>
                    <Switch>
                        {_.isEmpty(this.props.user) ? (
                            <div> 
                                <Route path="/register" component={Register}/>        
                                <Route path="/login" component={Login}/> 
                                <Route render={() => {
                                    return <h2>path not exist</h2>
                                }} exact={true}/>   
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <Popup trigger={<Link to ="/notes"><h3> New Notes</h3></Link>} position = "right top" on="click">
                                        <div>
                                            <ContactNew />
                                        </div>
                                    </Popup>
                                    <Link to ="/category"><h3>List Category</h3></Link>
                                    {/* <ContactList/>                                     */}
                                </div>
                                <Switch>
                                    <>
                                        <Route path="/account" component={Account}/>                     
                                        <Route path="/logout" component={Logout}/>   
                                        <Route path="/contacts" exact={true}/>
                                        <Route path="/contacts/add" component={ContactNew} exact={true}/>
                                        <Route path="/contacts/edit/:id" component={ContactEdit} exact={true} />
                                        <Route path="/contacts/:id" component={ContactShow} exact={true}/>
                                        {/* <Route path="/category" component={CategoryList} exact={true}/>
                                        <Route path="/category/new" component={CategoryNew} />   */}
                                    </>
                                </Switch>
                            </div> 
                        ) }                                                 
                    </Switch>
                </>  
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
export default connect(mapStateToProps)(App)

