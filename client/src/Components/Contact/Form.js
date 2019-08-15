import React from 'react'
import {connect} from 'react-redux'
import {Form, FormGroup} from 'react-bootstrap'
import {startAddContact} from '../../Redux/Actions/Contact'


class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            number:'',
            email:'',
            classification:''
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
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            classification: this.state.classification
        }
        console.log(formData, "data")
        this.props.dispatch(startAddContact(formData))
    }

    componentWillReceiveProps(nextProps){
        this.setState(() => ({
            name:this.state.name,
            phoneNo:this.state.phoneNo,
            email:this.state.email,
            classification:this.state.classification
        }))
    }
    
    render() {
        return (            
            <form className="container border" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Form.Label>New Note</Form.Label>
                    <FormGroup>
                    <select className="form-control" value={this.state.classification} name="classification" onChange={this.handleChange}>
                        <option value="">select</option>
                        {this.props.classification.map((classifications)=>{
                            return <option key={classifications._id} value={classifications._id}>{classifications.name}</option>
                        })}
                    </select>                   
                    </FormGroup>
                    <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.handleChange} name="name" />
                    <Form.Control type="Number" placeholder="Phone Number" value={this.state.number} onChange={this.handleChange} name="number" maxLength='10'/>
                    <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email" />
                    <input type='submit'/>
                </FormGroup>
            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        classification: state.classification,
    }
}
export default connect(mapStateToProps)(ContactForm)