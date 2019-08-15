import React from 'react'
import axios from '../../Config/axios'
import {Form} from 'react-bootstrap' 

class Register extends React.Component{
        constructor(){
            super()
            this.state={
                username:'',
                email:'',
                password:''
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
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post(`/users/register`,formData)
        .then(response=>{
            console.log(response.data)
            if(response.data.errors){
                alert(response.data.message)
            }else {
                this.props.history.push("/users/login")
            }
        })
        .catch(err=> {
            alert(err)
        })
    }

    render(){
        return(         
            <Form className="container" onSubmit={this.handleSubmit}>
                <Form.Group>  
                    <Form.Label className="text-dark">REGISTER</Form.Label>
                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                    <Form.Control type="text" name="email" value={this.state.email}  onChange={this.handleChange} placeholder="Email"/>                     
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>   
                    <input style={{marginLeft: "25%", marginTop:"5%"}} className="btn btn-success" type="submit" value="Submit"/>
                </Form.Group>
            </Form>
        )
    }
}

export default Register