const classificationInitialState = []
const classificationReducer = (state = classificationInitialState, action ) => {
    switch(action.type){
        case 'SET_CLASSIFICATION' :{
            return[...action.payload]
        }
        case 'ADD_CLASSIFICATION' :{
            return[...state, action.payload]
        }
            
        default:
            return[...state]
    }
}

export default classificationReducer