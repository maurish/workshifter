import { Map } from 'immutable'

import * as employeeModalActions from '../actions/employeeModalActions'
import * as employeeActions from '../actions/employeeActions'

const defaultState = Map({
    isOpen: false,
    employee: Map({
        id: null,
        name: ''
    })
})

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case employeeActions.EMPLOYEE_EDIT:
            return state.set('employee', new Map(payload)).set('isOpen', true)
        case employeeModalActions.MODAL_NAME_CHANGED:
            return state.setIn(['employee', 'name'], payload)
        case employeeModalActions.MODAL_CLOSE:
            return state.set('isOpen', false)
        default:
            return state
    }
}
