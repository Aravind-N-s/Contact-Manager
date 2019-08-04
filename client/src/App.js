import React from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Login from './Components/User/Login'
import Register from './Components/User/Register'
import Account from './Components/User/Account'
import Logout from './Components/User/Logout'

class App extends React.Component {
    constructor(props){
        super(props)
        this.handleShowAuth=this.handleShowAuth.bind(this)
    }
    
    handleShowAuth = () =>{
        return(
            <div>
                <div>
                    <Popup trigger={<Link to="/account">Account</Link>}position="left top"on="hover">
                        <Account />                          
                    </Popup>
                </div>
                <div>
                    <Popup trigger={<Link to="/login">Login</Link>} position="left top"on="hover">
                        <div>
                            <Login/>
                        </div>
                    </Popup><br />
                    <Popup trigger={<Link to="/register">Register</Link>} position="left top"on="hover">
                        <div>
                            <Register />
                        </div>
                    </Popup>
                </div>
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/" >Contact Manager</Link>{this.handleShowAuth()}
                </div>
                <Switch>
                    <Route path="/logout" component={Logout}/>                     
                    <Route render={() => {
                            return <h2>path not exist</h2>
                        }} exact={true}/>                                     
                </Switch>
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

