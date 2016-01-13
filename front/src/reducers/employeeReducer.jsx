import Immutable, { Map, List } from 'immutable'
import * as employeeActions from '../actions/employeeActions'
import * as modalActions from '../actions/modalActions'

const defaultState = Map({  
    employees: List(), 
    newEmployee: ''
})

export default function(state = defaultState, { type, payload }) {
    switch (type) {
        case employeeActions.EMPLOYEES_REQUEST_SUCCESS:
            return state.update('employees', employees => 
                employees.concat(Immutable.fromJS(payload))
            )
        case employeeActions.EMPLOYEES_REQUEST_ERROR:
            return state.set('employees', List())
        case employeeActions.CREATE_NEW_EMPLOYEE:
            return state.update('employees', employees => employees.push(new Map(payload)))
        case employeeActions.EMPLOYEE_DELETE_SUCCESS:
            return state.update('employees', employees =>
                employees.filter(employee => employee.get('id') !== payload)
            )
        case employeeActions.NEW_EMPLOYEE_NAME_CHANGED:
            return state.set('newEmployee', payload)
        case modalActions.EMPLOYEE_UPDATE_SUCCESS:
            return state.update('employees', employees =>
                employees.update(
                    employees.findIndex(employee => 
                        employee.get('id') == payload.id), 
                        employee => new Map(payload)
                    )
                )
        default:
            return state
    }
}


