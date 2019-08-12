import React from 'react'

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
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <span>Classification Name</span>
                        <input type="text" name='name' onChange={this.handleChange}/>
                    </label><br />
                    <input className ="btn btn-dark"  type = "submit" />
                </form>
            </div>
        )
    }
}

export default CategoryForm