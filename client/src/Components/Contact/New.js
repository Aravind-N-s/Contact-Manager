import React from 'react'
import ContactForm from './Form'
import {connect} from 'react-redux'

const ContactNew = (props) => {
    return(
        <div style={{marginRight: "150px"}} className="offset-md-6">
            <ContactForm id={props.match.params.id}/>
        </div>
    )    
}

export default connect()(ContactNew)