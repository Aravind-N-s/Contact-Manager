import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../Reducers/Users'
import contactReducer from '../Reducers/Contact'
import classificationReducer from '../Reducers/Classification'


const configureStore = () => {
    const store = createStore(combineReducers({
        user: usersReducer,
        contact: contactReducer,
        classification: classificationReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore