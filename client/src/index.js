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
        console.log(response.data,'index')
        store.dispatch(setUser(response.data))
    })
}
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
