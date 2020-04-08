import {ADD_REPTILE, SET_REPTILES} from '../actions/reptileActions'

export default (state=[], action) => {
    switch(action.type) {
        case ADD_REPTILE:
            return [...state, action.reptile]
        case SET_REPTILES:
            return action.reptiles
        default:
            return state
    }
}