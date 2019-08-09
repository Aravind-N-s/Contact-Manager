import React from 'react'
import axios from '../../Config/axios'

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phoneNo: '',
            email:'',
            category: '',
            categories: []            
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
            phoneNo: this.state.phoneNo,
            email: this.state.email,
            category: this.state.category
        }
        this.props.handleSubmit(formData)
    }

    componentWillReceiveProps(nextProps){
        this.setState(() => ({
            name: this.state.name,
            phoneNo: this.state.phoneNo,
            email: this.state.email,
            category: this.state.category
        }))
    }

    componentDidMount() {
        axios.get('/categories',{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
                }
            })
            .then((response) => {
                this.setState(() => ({
                    categories: response.data
                }))
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.state.category} name="category" onChange={this.handleChange}>
                            <option value="">Categories</option>
                            {this.state.categories.map((category) => {
                                return <option key={category._id}value={category._id} >{category.name}</option>
                            })}
                        </select>                    
                    </label><br/>
                    <label >
                        <input type="text" placeholder = "Title" value={this.state.title} onChange={this.handleChange} name="title" />
                    </label><br/>
                    <label >
                        <input type="Number" placeholder = "Phone.NO" value={this.state.phoneNo} onChange={this.handleChange} name="phoneNo" />
                    </label><br/>
                    <label >
                        <input type="email" placeholder = "Email" value={this.state.email} onChange={this.handleChange} name="email" />
                    </label><br/>
                    <center><input type='submit' /></center>
                </form>
            </div>
        )
    }
}

export default ContactForm