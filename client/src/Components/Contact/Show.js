import React from 'react'
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap'

const ContactDisplay = (props) =>{         
    return (   
        <Card style={{marginTop:10, textTransform: "capitalize"}} className ="col-sm-4 col-md-4 offset-xl-4 bg-info text-danger"> 
            <h1 className="text-dark">Contact Details</h1>
            <CardImg style={{height:"100px", width:"100px"}}src="/images/1.jpg" />
            <CardBody>
                <CardTitle>{props.contact && props.contact.name}</CardTitle>
                <CardSubtitle className="text-muted">{props.contact && props.contact.classification.name}</CardSubtitle>
                <CardText>{props.contact && props.contact.email}</CardText>
                <Button className="btn-danger">{props.contact && props.contact.number}</Button>
            </CardBody>
        </Card>
    )        
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contact.find(contacts => contacts._id == props.match.params.id)
    }    
}
export default connect(mapStateToProps)(ContactDisplay)