import React from 'react'
import CategoryForm from './Form'
import axios from '../../Config/axios'
import {connect} from 'react-redux'
import {addClassification} from '../../Redux/Actions/Classification'

class ClassificationNew extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            name : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(formData,e){
        e.preventDefault()
        axios.post('/classification',formData, { 
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
            }
            else {
                this.props.history.push(`/`)
                const newClassification = response.data
                this.props.dispatch(addClassification(newClassification))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <CategoryForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect()(ClassificationNew)