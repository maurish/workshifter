import { Map } from 'immutable'

import { LOGIN_SUCCESS } from '../actions/userActions'


const defaultState = Map({
    loggedIn: false
})

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return state.set('loggedIn', true)
        default:
            return state
    }
}
