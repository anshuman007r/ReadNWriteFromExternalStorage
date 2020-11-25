import { counterValue } from './counterValue'
import { combineReducers, createStore } from 'redux'
import { LoginReducer } from './LoginReducer'

export default combineReducers({
    counterValue,LoginReducer,
})
