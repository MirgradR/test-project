import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { todoReducer } from './todoReducer'

let reducers = combineReducers({
    todos: todoReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store