import React from 'react'
import axios from '../../Config/axios'
import ContactForm from './Form'

class ContactNew extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(formData){
        axios.post('/contact', formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
                //change to another component - show
                if(response.data.hasOwnProperty('errors')){
                    console.log(response.data.errors)
                }
                else {
                    this.props.history.push(`/contact/${response.data._id}`)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render(){
        return(
            <div>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default ContactNew