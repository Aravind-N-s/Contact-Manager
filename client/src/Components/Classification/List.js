import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import ClassificationNew from './New'

const ClassificationList = (props) => {
    return (
        <div className = "col-sm-4">
            <h3>Classification List</h3> 
            {props.classification && (
                <ol>
                    {props.classification.map((classifications => {
                        return <li key={classifications._id}><Link to="/contact/new">{classifications.name}</Link></li> 
                    }))}
                </ol>
            )}
            <ClassificationNew />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        classification : state.classification
    }
}
export default connect(mapStateToProps)(ClassificationList)