import {createStore, combineReducers} from 'redux'

import usersReducer from '../Reducers/Users'
import contactReducer from '../Reducers/Contact'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: usersReducer,
        contact: contactReducer
    }))
    return store
}

export default configureStore