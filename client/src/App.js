import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'

import Login from './Components/User/Login'
import Register from './Components/User/Register'
import Account from './Components/User/Account'
import Logout from './Components/User/Logout'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/" >Contact Manager</Link><br />
                    {_.isEmpty(this.props.user) ? (
                        <div> 
                            <Link to="/register">Register</Link><br />
                            <Link to="/login">Login</Link><br />
                        </div>
                    ) : (
                        <Link to="/account">Account</Link>
                    ) }
                    
                </div>
                <Switch>
                    <>
                        <Route path="/login" component={Login}/>                     
                        <Route path="/register" component={Register}/>                     
                        <Route path="/account" component={Account}/>                     
                        <Route path="/logout" component={Logout}/>                     
                        {/* <Route render={() => {
                                return <h2>path not exist</h2>
                            }}/>    */}
                    </>                                  
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

