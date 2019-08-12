import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import axios from './Config/axios';
import configureStore from './Redux/Store/configureStore'
import {setUser} from './Redux/Actions/User'
import {setContact} from './Redux/Actions/Contact'
import {setClassification} from './Redux/Actions/Classification'


const store = configureStore()

if(localStorage.getItem('userAuthToken')){
    axios.get('/users/account',{
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
    .then(response => {
        store.dispatch(setUser(response.data))
    })
    axios.get('/contact',{
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
    .then(response => {
        store.dispatch(setContact(response.data.contact))
        store.dispatch(setClassification(response.data.classification))
    })
}
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
