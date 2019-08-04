import React from 'react'
import axios from '../../Config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

import {setUser} from '../../Redux/Actions/User'

class Account extends React.Component{
    constructor(){
        super()
        this.state={
            notes:{},
            category:{},
            tags:{}
        }
    }

    // tokens are sending to server
    componentDidMount(){
        axios.get(`/user/account`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            const user=response.data
            this.setState({user})
            this.props.dispatch(setUser(user))
            //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })
        axios.get(`/notes`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            const notes=response.data
            this.setState({notes}) //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })
        axios.get(`categories`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            const category=response.data
            this.setState({category}) //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })
        axios.get(`tags`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        }) 
        .then (response=>{
            const tags=response.data
            this.setState({tags}) //when our current value doesn't depend on previous value, that time 
            //else use () =>{}
        })
    }

    render(){
        return(
            <div className = "bg-white" >
                <h6 className="text-weight-bold">User Account</h6>
                    <h4 className="container bg-white text-dark text-weight-bold text-capitalize">{this.props.user.username}
                        <p className="container bg-success text-dark text-weight-bold">Details</p>
                        <p className="container text-dark text-weight-bold">Notes<small className = "text-muted text-weight-bold"> - {this.state.notes.length} </small> </p>
                        <p className="container text-dark text-weight-bold">Category<small className = "text-muted text-weight-bold"> - {this.state.category.length} </small></p>
                        <p className="container text-dark text-weight-bold">Tags<small className = "text-muted text-weight-bold"> - {this.state.tags.length} </small></p>
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