import { Map, List } from 'immutable'
import { 
    EMPLOYEES_REQUEST, 
    EMPLOYEES_REQUEST_SUCCESS, 
    EMPLOYEES_REQUEST_ERROR, 
    CREATE_NEW_EMPLOYEE,
    EMPLOYEE_DELETE_SUCCESS,
    NEW_EMPLOYEE_NAME_CHANGED,
    EMPLOYEE_EDIT,
    MODAL_NAME_CHANGED,
    EMPLOYEE_UPDATE_SUCCESS,
    MODAL_CLOSE
} from '../actions/employeeActions'

const defaultState = Map({  employees: List(), 
                            newEmployee: '', 
                            modal: Map({
                                isOpen: false, 
                                employee: Map({
                                    id: null, 
                                    name: ''})
                            })
                        })

export default function(state = defaultState, { type, payload }) {
    switch (type) {
        case EMPLOYEES_REQUEST_SUCCESS:
            return state.update('employees', employees =>
                employees.concat(payload.map(Map))
            )
        case EMPLOYEES_REQUEST_ERROR:
            return state.set('employees', List())
        case CREATE_NEW_EMPLOYEE:
            return state.update('employees', employees => employees.push(new Map(payload)))
        case EMPLOYEE_EDIT:
            return state.update('modal', modal => modal.set('employee', new Map(payload)).set('isOpen', true))
        case EMPLOYEE_DELETE_SUCCESS:
            return state.update('employees', employees =>
                employees.filter(employee => employee.get('id') !== payload)
            )
        case NEW_EMPLOYEE_NAME_CHANGED:
            return state.set('newEmployee', payload)
        case MODAL_NAME_CHANGED:
            return state.setIn(['modal', 'employee', 'name'], payload)
        case MODAL_CLOSE:
            return state.update('modal', modal => modal.set('isOpen'), false)
        case EMPLOYEE_UPDATE_SUCCESS:
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


