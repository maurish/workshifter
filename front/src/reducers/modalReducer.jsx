import { Map } from 'immutable'

import * as modalActions from '../actions/modalActions'
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
        case modalActions.MODAL_NAME_CHANGED:    
            return state.setIn(['employee', 'name'], payload)
        case modalActions.MODAL_CLOSE:
            return state.set('isOpen', false)
        default:
            return state
    }
}
