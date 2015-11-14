import { compose } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import * as reducers from './reducers'

const finalCreateReducer = createStore//compose()(createStore)
const combinedReducer = combineReducers(reducers)

export default finalCreateReducer(combinedReducer)

