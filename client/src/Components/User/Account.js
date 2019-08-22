import React from 'react'
import axios from '../../Config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {setUser} from '../../Redux/Actions/User'

class Account extends React.Component{
    // tokens are sending to server
    componentDidMount(){
        axios.get(`/users/account`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            console.log(response.data,'users')
            const user=response.data
            this.props.dispatch(setUser(user))
            //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })        
    }

    render(){
        return(
            <div>
                <h3>User Account</h3>
                <h4>{this.props.user.username}</h4>   
                <p>Contact - {this.props.contact.length}</p>
                <p>Classification - {this.props.classification.length}</p>
               <Link className="btn btn-dark" to="/users/logout">Logout</Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        contact: state.contact,
        classification: state.classification
    }
}

// export default Account
export default connect(mapStateToProps)(Account)