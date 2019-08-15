import React from 'react'
import ContactForm from './Form'
import {connect} from 'react-redux'
import {startAddContact} from '../../Redux/Actions/Contact'

class ContactNew extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
        
    }
    render(){
        return(
            <div>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect()(ContactNew)