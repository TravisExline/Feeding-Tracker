import {combineReducers} from 'redux'
import reptileReducer from './reptileReducer'
import userReducer from './userReducer'
import feedingReducer from './feedingReducer'

export default combineReducers({
    reptileReducer,
    userReducer,
    feedingReducer
})