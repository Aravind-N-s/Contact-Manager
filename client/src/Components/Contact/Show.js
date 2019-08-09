import React from 'react'
import axios from '../../Config/axios'
import {Link} from 'react-router-dom'

class ContactShow extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contact/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
                this.setState(() => ({
                    note: response.data
                }))
            })
    }

    handleRemove(e){
        const id = this.props.match.params.id
        const confirmRemove = window.confirm("Are You Sure?")
        if(confirmRemove){
            axios.delete(`/notes/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('userAuthToken')
                }
            })
            .then(() => {
                this.props.history.push('/notes')
            })
        }
    }
    render(){
        return(
            <div>            
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.body}</p>
                <p>{this.state.note.category && this.state.note.category.name}</p>
                <Link to="/notes">Back</Link>
                <Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link>
                <button onClick = {this.handleRemove}>Delete</button>
            </div>
        )        
    }
}

export default ContactShow