import React from 'react'
import axios from '../../Config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {setUser} from '../../Redux/Actions/User'
import {setContact} from '../../Redux/Actions/Contact'

class Account extends React.Component{
    // tokens are sending to server
    componentDidMount(){
        axios.get(`/users/account`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            const user=response.data
            this.props.dispatch(setUser(user))
            //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })     
          
        axios.get(`/contact`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            const contact=response.data
            this.props.dispatch(setContact(contact))
            //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })        
    }

    render(){
        return(
            <div>
                <h6>User Account</h6>
                    <h4>{this.props.user.username}
                    </h4>
                    
               <Link to="logout">Logout</Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

// export default Account
export default connect(mapStateToProps)(Account)