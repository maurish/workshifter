import Immutable, { Map, List, Record } from 'immutable'
import * as employeeActions from '../actions/employeeActions'
import * as employeeModalActions from '../actions/employeeModalActions'

const defaultState = Map({
    employees: List()
})

const Employee = Record({
    name: null,
    id: null,
    shifts: List()
})

const EmployeeRecord = employee => Immutable.fromJS(employee, (key, val) => {
    switch (key) {
        case '':
            return Employee(val)
        default:
            return val
    }
})


export default function(state = defaultState, { type, payload }) {
    switch (type) {
        case employeeActions.ADD_EMPLOYEE:
            return state.update('employees', employees => employees.push(EmployeeRecord(payload)))
        case employeeActions.EMPLOYEE_DELETE_SUCCESS:
            return state.update('employees', employees =>
                employees.filter(employee => employee.get('id') !== payload)
            )
        case employeeModalActions.EMPLOYEE_UPDATE_SUCCESS:
            let i = state.get('employees').findIndex(employee => employee.get('id') == payload.id)
            return state.setIn(['employees', i], EmployeeRecord(payload))
        default:
            return state
    }
}
