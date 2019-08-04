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
            const user=response.data
            console.log(user)
            this.setState({user})
            this.props.dispatch(setUser(user))
            //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })        
    }

    render(){
        return(
            <div className = "bg-white" >
                <h6 className="text-weight-bold">User Account</h6>
                    <h4 className="container bg-white text-dark text-weight-bold text-capitalize">{this.props.user.username}
                    </h4>
                    
               <Link className="btn btn-success" to="logout">Logout</Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:  state.user
    }
}

// export default Account
export default connect(mapStateToProps)(Account)