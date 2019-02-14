import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import reducer from '../Counter/reducer'

export default createStore(
    combineReducers({
        counter: reducer
    }),
    applyMiddleware(logger)
)