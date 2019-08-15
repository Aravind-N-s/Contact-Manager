import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

const ContactList = (props) =>{
    return (
        <ListGroup >
            <ListGroupItem className="h3">-Contacts-</ListGroupItem> 
            {props.contact && (
                props.contact.map((contacts => {
                    return (
                        <ListGroupItem key={contacts._id}>
                            <Link style={{textTransform:"capitalize"}} className="h4 text-bold text-dark"
                                to={`/show/${contacts._id}`}>{contacts.name}<br/>
                            </Link>
                        </ListGroupItem>
                    )
                }))
            )}
        </ListGroup>
    )
}

const mapStateToProps = (state) => {
    return{
        contact: state.contact
    }
}

export default connect(mapStateToProps)(ContactList)