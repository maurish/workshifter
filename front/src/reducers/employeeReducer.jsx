import { Map, List } from 'immutable'
import { 
    EMPLOYEES_REQUEST, EMPLOYEES_REQUEST_SUCCESS, EMPLOYEES_REQUEST_ERROR 
} from '../actions/employeeActions'

const defaultState = List()

export default function(state = defaultState, { type, payload }) {
    switch (type) {
        case EMPLOYEES_REQUEST:
            return state
        case EMPLOYEES_REQUEST_SUCCESS:
            return state.concat(payload.map(Map))
        case EMPLOYEES_REQUEST_ERROR:
            return state.clear()
        default:
            return state
    }
}
