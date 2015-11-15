import { compose } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import * as reducers from './reducers'

const combinedReducer = combineReducers(reducers)

export default createStore(combinedReducer)

