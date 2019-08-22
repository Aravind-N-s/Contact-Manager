import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card,CardTitle,CardBody,Button } from 'reactstrap'

const ClassificationList = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle className="h3">Add Contact</CardTitle> 
                <CardTitle className="h4 text-muted">Classification List</CardTitle> 
                {props.classification && (
                    <ol className="card-text">
                        {props.classification.map((classifications => {
                            return <li key={classifications._id}>
                                    <Link style={{height:"20%", width:"20%", marginTop:"2%"}}
                                        className ="btn btn-dark" to={`/new/${classifications._id}`}>
                                        {classifications.name}
                                    </Link>
                                </li> 
                        }))}
                    </ol>
                )}
                <Link style={{marginLeft:10}} className = "btn btn-secondary" to='/classification/new'>New Classification</Link>
            </CardBody>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        classification : state.classification
    }
}
export default connect(mapStateToProps)(ClassificationList)