import {createStore, combineReducers} from 'redux'

import usersReducer from '../Reducers/Users'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: usersReducer,
        //post: postsReducer
    }))
    return store
}

export default configureStore