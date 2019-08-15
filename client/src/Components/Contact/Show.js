import React from 'react'
import {connect} from 'react-redux'

const ContactDisplay = (props) =>{         
    return (   
        <div>    
            <h3>{this.props.contact.name}</h3>
            <h3>{this.props.contact.email}</h3>
            <h3>{this.props.contact.phoneNo}</h3>  
        </div>
    )        
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.find(contacts => contacts._id === this.props.match.params.id)
    }    
}
export default connect(mapStateToProps)(ContactDisplay)