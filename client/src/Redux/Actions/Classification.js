
export const setClassification = (classification) => {
    return { type: 'SET_CLASSIFICATION', payload: classification}
}

export const addClassification = (classification) => {
    return { type: 'ADD_CLASSIFICATION', payload: classification}
}

export const resetClassification = () => {
    return { type: 'RESET_CLASSIFICATION'}
}