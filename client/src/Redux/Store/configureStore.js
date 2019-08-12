import {createStore, combineReducers} from 'redux'

import usersReducer from '../Reducers/Users'
import contactReducer from '../Reducers/Contact'
import classificationReducer from '../Reducers/Classification'


const configureStore = () => {
    const store = createStore(combineReducers({
        user: usersReducer,
        contact: contactReducer,
        classification: classificationReducer
    }))
    return store
}

export default configureStore