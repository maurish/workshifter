import {NEW_EMPLOYEE_NAME_CHANGED} from '../actions/employeeActions'

const defaultState = 'Eeva<3';

export default function(state = defaultState, { type, payload}) {
    switch(type){

        case NEW_EMPLOYEE_NAME_CHANGED:
            return payload
        default: 
            return state
    }
    return state;
}
