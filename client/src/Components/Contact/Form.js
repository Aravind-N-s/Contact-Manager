import React from 'react'
import {connect} from 'react-redux'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {startAddContact} from '../../Redux/Actions/Contact'

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            number:'',
            email:'',
            classification:'',
            edit: false
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

    handleSubmit(e, props){
        console.log(this.props)
        e.preventDefault()
        const formData = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            classification: this.props.selectClassification._id
        }
        this.props.dispatch(startAddContact(formData))
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState(() => ({
    //         name:this.state.name,
    //         phoneNo:this.state.phoneNo,
    //         email:this.state.email,
    //         classification:this.state.classification,
     //        edit: true
    //     }))
    // }
    
    render(props) {
        return (            
            <form className="container border" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>New Note</Label>
                    <FormGroup>
                        {this.state.edit == true ? (
                            <>
                            <Input className="form-control" value={this.state.classification} name="classification" onChange={this.handleChange}>
                                <option value="">Select</option>
                                {this.state.classification.map((classifications)=>{
                                    return <option key={classifications._id}
                                    value={classifications._id}>{classifications.name}</option>
                                })}
                            </Input>    
                            </>
                        ):(
                            <>
                                <select className="form-control" disabled>
                                    <option value="">
                                        {this.props.selectClassification && this.props.selectClassification.name}
                                    </option>
                                </select>
                            </>
                        )}
                                      
                    </FormGroup>
                    <Input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name" />
                    <Input type="Number" placeholder="Phone Number" value={this.state.number} onChange={this.handleChange} name="number" maxLength='10'/>
                    <Input type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email" />
                    <input type='submit'/>
                </FormGroup>
            </form>
        )
    }
}

const mapStateToProps = (state, props) =>{
    return {
        classification: state.classification,
        selectClassification: state.classification.find(classifications => classifications._id == props.id)
    }
}
export default connect(mapStateToProps)(ContactForm)