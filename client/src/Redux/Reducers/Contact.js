const contactInitialState = []
const contactReducer = (state = contactInitialState, action ) => {
    switch(action.type){
        case 'SET_CONTACT' :{
            return[...action.payload]
        }
        case 'ADD_CONTACT' :{
            return[...state, action.payload]
        }
            
        default:
            return[...state]
    }
}

export default contactReducer