import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import axios from './Config/axios';
import configureStore from './Redux/Store/configureStore'
import {setUser} from './Redux/Actions/User'


const store = configureStore()

if(localStorage.getItem('userAuthToken')){
    axios.get('/users/account',{
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
    .then(response => {
        console.log(response.data)
        store.dispatch(setUser(response.data))
    })
    axios.get('/contact',{
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
    .then(response => {
        console.log(response.data)
        // store.dispatch(setContact(response.data))
    })
    // axios.get('/classification',{
    //     headers: {
    //         'x-auth': localStorage.getItem('userAuthToken')
    //     }
    // })
    // .then(response => {
    //     console.log(response.data)
    //     store.dispatch(setClassification(response.data))
    // })
}
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
