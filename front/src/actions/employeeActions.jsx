import axios from 'axios'

import * as EMPLOYEE_API from '../constants'

export const EMPLOYEES_REQUEST          = 'EMPLOYEES_REQUEST'
export const EMPLOYEES_REQUEST_SUCCESS  = 'EMPLOYEES_REQUEST_SUCCESS'
export const EMPLOYEES_REQUEST_ERROR    = 'EMPLOYEES_REQUEST_ERROR'
export const NEW_EMPLOYEE_NAME_CHANGED  = 'NEW_EMPLOYEE_NAME_CHANGED'
export const CREATE_NEW_EMPLOYEE        = 'CREATE_NEW_EMPLOYEE'
export const EMPLOYEE_DELETE_SUCCESS    = 'EMPLOYEE_DELETE_SUCCESS'
export const EMPLOYEE_EDIT              = 'EMPLOYEE_EDIT'
export const ADD_NEW_SHIFT_SUCCESS      = 'ADD_NEW_SHIFT_SUCCESS'
export const REMOVE_SHIFT_SUCCESS       = 'REMOVE_SHIFT_SUCCESS'

const requestEmployees = () => ({type: EMPLOYEES_REQUEST})

const receiveEmployees = (employees) => ({
    type: EMPLOYEES_REQUEST_SUCCESS,
    payload: employees
})

const requestEmployeesFailure = (error) => ({
    type: EMPLOYEES_REQUEST_ERROR,
    payload: error
})

const addNewEmployee = (employee) => ({
    type: CREATE_NEW_EMPLOYEE,
    payload: employee
})

export const fetchEmployees = () =>
    dispatch =>  {
        dispatch(requestEmployees())
        fetch(EMPLOYEE_API.URL)
            .then(response => response.json())
            .then(employees => dispatch(receiveEmployees(employees)))
            .catch(e => console.log(e))
    }

export const newEmployeeNameChanged = (name) => ({
    type: NEW_EMPLOYEE_NAME_CHANGED,
    payload: name
})

export const createNewEmployee = (name) =>
    dispatch => {
        fetch(EMPLOYEE_API.URL,
            {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                'body': JSON.stringify({name: name})
            })
        .then(response => (response.json()))
        .then(employee => dispatch(addNewEmployee(employee)))
        .catch(e => console.log(e))

    }

export const editEmployee = employee => ({
        type: EMPLOYEE_EDIT,
        payload: employee
})

export const deleteEmployee = id =>
    dispatch =>
        axios.delete(`${EMPLOYEE_API.URL}/${id}`)
            .then(response => dispatch(deleteEmployeeSuccess(response.data)))

const deleteEmployeeSuccess = (employee) => ({
    type: EMPLOYEE_DELETE_SUCCESS,
    payload: employee
})

export const addNewShift = (id, start, end) =>
    dispatch =>
        axios.post(`${EMPLOYEE_API.URL}/${id + EMPLOYEE_API.SHIFTS}`, {
            startTime: start,
            endTime: end
        }).then(response => dispatch(addNewShiftSuccess(response.data)))

const addNewShiftSuccess = shift => ({
        type: ADD_NEW_SHIFT_SUCCESS,
        payload: shift
})

export const removeShift = (shiftID, employeeID) =>
    dispatch =>
        axios.delete(`${EMPLOYEE_API.URL}/${employeeID + EMPLOYEE_API.SHIFTS}/${shiftID}`)
            .then(response => dispatch(removeShiftSuccess(response.data)))

const removeShiftSuccess = shiftID => ({
        type: REMOVE_SHIFT_SUCCESS,
        payload: shiftID
})
