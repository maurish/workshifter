
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
const middleWares = [applyMiddleware(thunk)]

if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const DevTool = require('./DevTools');
    middleWares.push(DevTool.instrument())
}

const createFinalStore = compose(...middleWares)(createStore)
const combinedReducer = combineReducers(reducers)

export default createFinalStore(combinedReducer)

