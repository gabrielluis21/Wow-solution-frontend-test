import authReducer from './authReducer'
import userReducer from './userReducer'
import profileReducer from './profileReducer'
import cityReducer from './cityReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
    city: cityReducer
})

export default rootReducer