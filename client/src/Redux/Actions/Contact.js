
export const setContact = (contact) => {
    return { type: 'SET_CONTACT', payload: contact}
}

export const resetContact = () => {
    return { type: 'RESET_CONTACT'}
}