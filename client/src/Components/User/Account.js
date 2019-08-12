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
        console.log(this.props.contact,'contact')
        return(
            <div>
                <h6>User Account</h6>
                    <h4>{this.props.user.username}
                    </h4>
                    {this.props.contact.map((contacts) => {
                        return <div key={contacts._id}>{contacts.name}</div>
                    })}
               <Link to="logout">Logout</Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        contact: state.contact
    }
}

// export default Account
export default connect(mapStateToProps)(Account)