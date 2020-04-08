import {ADD_USER, SET_USERS} from '../actions/userActions'

export default(state= {}, action) => {
    switch(action.type) {
        case ADD_USER:
            return action.user
        case SET_USERS:
            return action.users
        default:
            return state
    }
}