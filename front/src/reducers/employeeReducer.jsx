import Immutable, { Map, List } from 'immutable'
import * as employeeActions from '../actions/employeeActions'
import * as employeeModalActions from '../actions/employeeModalActions'

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
        case employeeModalActions.EMPLOYEE_UPDATE_SUCCESS:
            console.log(payload)
            let i = state.get('employees').findIndex(employee => employee.get('id') == payload.id)
            return state.setIn(['employees', i], Immutable.fromJS(payload))
        case employeeActions.ADD_NEW_SHIFT_SUCCESS:
            return state.updateIn(
                ['employees', state.get('employees').findIndex(employee => employee.get('id') == payload.id), 'shifts'],
                shifts => shifts.push(new Map(payload.shift)))
        case employeeActions.REMOVE_SHIFT_SUCCESS:
            return state.updateIn(
                ['employees', state.get('employees').findIndex(employee => employee.get('id') == payload.employeeID), 'shifts'],
                shifts => shifts.filter(shift => shift.get('id') != payload.shiftID)
            )
        case employeeActions.EMPLOYEE_SHIFTS_EDIT_SUCCESS:
            console.log('success!')
            return state
        default:
            return state
    }
}
