import React from 'react'
import {connect} from 'react-redux'
import {Form, FormGroup} from 'react-bootstrap'

class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name : this.state.name
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <Form className="border col-sm-6" onSubmit = {this.handleSubmit}>
                <FormGroup >
                    <Form.Label className="h2">Add Classification</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' onChange={this.handleChange}/>
                    <input className ="btn btn-dark" type = "submit" />
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(CategoryForm)