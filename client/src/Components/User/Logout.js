import React from 'react'
import axios from '../../Config/axios'

import {connect} from 'react-redux'
import {resetUser} from '../../Redux/Actions/User'


class Logout extends React.Component{
    
    componentDidMount(){
        axios.delete(`/users/logout`,{
        headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }
        })
        .then(response=>{
            localStorage.removeItem('userAuthToken')
            this.props.dispatch(resetUser())
            this.props.history.push('/')
        })
    }
    render(){
        return(
            <div><p>logging out..</p></div>
        )
    }
}

export default connect()(Logout)