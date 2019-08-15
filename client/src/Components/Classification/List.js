import React from 'react'
import {connect} from 'react-redux'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import ContactForm from '../Contact/Form'

const ClassificationList = (props) => {
    return (
        <div>
            <h3>Classification List</h3> 
            {props.classification && (
                <ol>
                    {props.classification.map((classifications => {
                        return <li key={classifications._id}>
                                <Popup trigger={<Link to='contact/new'>{classifications.name}</Link>} position="left top"on="hover">
                                    <ContactForm />
                                </Popup>
                            </li> 
                    }))}
                </ol>
            )}
            <Link style={{marginLeft:10}} className = "btn btn-secondary" to='/classification/new'>New Classification</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        classification : state.classification
    }
}
export default connect(mapStateToProps)(ClassificationList)