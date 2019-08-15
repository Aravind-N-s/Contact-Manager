import React from 'react'
import {connect} from 'react-redux'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import ContactDisplay from './Show'

const ContactList = (props) =>{
    return (
        <div>
            <h3>Contacts List</h3>
            {props.contact && (
                props.contact.map((contacts => {
                    return (
                        <div key ={contacts._id}>
                            <Popup  trigger={<Link to={`/contact/info/${contacts._id}`}>{contacts.name}<br/></Link>} position = "right bottom" on="hover"> 
                                <ContactDisplay/>
                            </Popup>
                        </div>
                    )
                }))
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        contact: state.contact
    }
}

export default connect(mapStateToProps)(ContactList)