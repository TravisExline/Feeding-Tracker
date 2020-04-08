import {ADD_FEEDING, SET_FEEDINGS} from '../actions/feedingActions'

export default (state=[], action) => {
    switch(action.type) {
        case ADD_FEEDING:
            return [...state, action.feeding]
        case SET_FEEDINGS:
            return action.feedings
        default:
            return state
    }
}