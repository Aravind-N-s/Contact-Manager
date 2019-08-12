import React from 'react'
import ContactForm from './Form'
import axios from '../../Config/axios';

class ContactEdit extends React.Component{
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