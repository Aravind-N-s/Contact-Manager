import React from 'react'
import axios from '../../Config/axios'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post(`/users/login`,formData)
        .then(response=>{
            console.log(response)
            if(response.data.errors){
                alert(response.data.errors)
            }else{
                const token=response.data.token
                if(token){
                    localStorage.setItem('userAuthToken',token)
                    this.props.history.push('/account')
                }
            }
        })
        .catch(err =>{
            alert('err')
        })

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>LOGIN</h2>
                <label>
                    <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} placeholder="Email"/>
                </label><br/>               
                <label>                               
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                </label><br />
                <input type="submit"/><br />
            </form>
        )
    }
}

export default Login