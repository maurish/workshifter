import axios from 'axios'

import * as EMPLOYEE_API from '../constants'

export const MODAL_CLOSE                = 'MODAL_CLOSE'
export const MODAL_NAME_CHANGED         = 'MODAL_NAME_CHANGED'
export const EMPLOYEE_UPDATE_SUCCESS    = 'EMPLOYEE_UPDATE_SUCCESS'

export const changeModalValue = name => (
    {
        type: MODAL_NAME_CHANGED,
        payload: name
    }
)

export const submitModal = employee => 
    dispatch => 
        axios.post(`${EMPLOYEES_API.URL}/${employee.get('id')}`, employee.toJS())
            .then(response => 
                dispatch(employeeUpdateSuccess(response.data))
            )

const employeeUpdateSuccess = data => (
    {
        type: EMPLOYEE_UPDATE_SUCCESS,
        payload: data
    }
)

export const closeModal = () => ({type: MODAL_CLOSE})

