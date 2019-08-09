import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class ContactList extends React.Component {
    
    render(){
        return (
            <div>
                <h2> Contact </h2>
                <ul>
                    {this.state.contact.map(note => {
                        return <li key={this.props.contact._id}><Link to={`/contact/${this.props.contact._id}`}>{this.props.contact.name}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact : state.contact
    }
}

export default connect(mapStateToProps)(ContactList)