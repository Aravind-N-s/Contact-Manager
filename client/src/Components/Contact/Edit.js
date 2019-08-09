import React from 'react'
import ContactForm from './Form'
import axios from '../../Config/axios';

class ContactEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            this.setState(() => ({
                note: response.data
            }))
        })
    }
    handleSubmit(formData){
        axios.put(`/notes/${this.state.contact._id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
            .then(response =>{
                if(response.data.hasOwnProperty('errors')){
                    console.log(response.data.errors)
                }
                else {
                    this.props.history.push(`/notes/${response.data._id}`)
                }
            })
    }
    render(){
        return(
            <div>
                <h2>Edit Here</h2>
                <ContactForm handleSubmit={this.handleSubmit} note={this.state.contact}/>
            </div>
        )
    }
}

export default ContactEdit