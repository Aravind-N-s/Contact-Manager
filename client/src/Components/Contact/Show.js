import React from 'react'
import {connect} from 'react-redux'

const ContactDisplay = (props) =>{
    return(
        // <div>
        // {props.contact && (
        //     props.contact.map((contacts => {
        //         return (
        //             <div> 
        //                 {contacts._id == this.props._id && (
        //                     <>
        //                         <h3>{contacts.name}</h3>
        //                         <h3>{contacts.email}</h3>
        //                         <h3>{contacts.phoneNo}</h3>  
        //                     </>
        //                     ) 
        //                 }
        //             </div>
        //         )
        //     }))
        // )}
        // </div>
        console.log(this.props)
    )
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact
    }    
}
export default connect(mapStateToProps)(ContactDisplay)