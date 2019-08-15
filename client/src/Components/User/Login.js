import React from 'react'
import axios from '../../Config/axios'
import {Form} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

const Way = () =>{
    return(
        <Redirect to="/" />
    )
}

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        axios.post(`/users/login`,formData)
        .then((response)=>{
            if(response.data.errors){
                alert(response.data.errors)
            }else{
                const token=response.data.token
                if(token){
                    localStorage.setItem('userAuthToken',token)
                    alert("Welcome to the App")
                    this.props.history.push("/info")
                }
            }
        })
        .catch(err =>{
            alert(err)
        })

    }
    render(props){
        return(
            <Form className="container" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label className="text-dark">LOGIN</Form.Label>
                    <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>            
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                    <input style={{marginLeft: "25%", marginTop:"5%"}} className="btn btn-success" type="submit" value="Submit"/>
                </Form.Group>
            </Form>
        )
    }
}
export default Login