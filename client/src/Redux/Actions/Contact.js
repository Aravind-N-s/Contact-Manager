import axios from '../../Config/axios'

export const setContact = (contact) => {
    return { type: 'SET_CONTACT', payload: contact}
}

export const startAddContact = (formData) =>{
    return (dispatch) => {
        axios.post('/contact', formData,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else {
                // this.props.history.push(`/contact/${response.data._id}`)
                dispatch(addContact(response.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const addContact = (Contact) => {
    return { type: 'ADD_CONTACT', payload: Contact}
}

export const resetContact = () => {
    return { type: 'RESET_CONTACT'}
}
