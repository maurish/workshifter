import { Map, List } from 'immutable'
import { 
    EMPLOYEES_REQUEST, 
    EMPLOYEES_REQUEST_SUCCESS, 
    EMPLOYEES_REQUEST_ERROR, 
    CREATE_NEW_EMPLOYEE, 
    NEW_EMPLOYEE_NAME_CHANGED
} from '../actions/employeeActions'

const defaultState = Map({employees: List(), newEmployee: ''})

export default function(state = defaultState, { type, payload }) {
    switch (type) {
        case EMPLOYEES_REQUEST_SUCCESS:
            return state.update('employees', employees => 
                employees.concat(payload.map(Map))
            )
        case EMPLOYEES_REQUEST_ERROR:
            return state.set('employees', List())
        case CREATE_NEW_EMPLOYEE:
            return state.update('employees', employees =>
                employees.push(payload)
            )
        case NEW_EMPLOYEE_NAME_CHANGED:
            return state.set('newEmployee', payload)
        default:
            return state
    }
}
