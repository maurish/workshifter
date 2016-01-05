import { EMPLOYEES_URL } from '../config'
import axios from 'axios'

export const EMPLOYEES_REQUEST          = 'EMPLOYEES_REQUEST'
export const EMPLOYEES_REQUEST_SUCCESS  = 'EMPLOYEES_REQUEST_SUCCESS'
export const EMPLOYEES_REQUEST_ERROR    = 'EMPLOYEES_REQUEST_ERROR'
export const NEW_EMPLOYEE_NAME_CHANGED  = 'NEW_EMPLOYEE_NAME_CHANGED'
export const CREATE_NEW_EMPLOYEE        = 'CREATE_NEW_EMPLOYEE'
export const EMPLOYEE_DELETE_SUCCESS    = 'EMPLOYEE_DELETE_SUCCESS'
export const EMPLOYEE_EDIT              = 'EMPLOYEE_EDIT'
export const MODAL_NAME_CHANGED         = 'MODAL_NAME_CHANGED'
export const EMPLOYEE_UPDATE_SUCCESS    = 'EMPLOYEE_UPDATE_SUCCESS'
export const MODAL_CLOSE                = 'MODAL_CLOSE'

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
            fetch(EMPLOYEES_URL)
            .then(response => response.json())
            .then(employees => dispatch(receiveEmployees(employees)))
            .catch(e => console.log(e))
    }

export const newEmployeeNameChanged = (name) => ({
    type: NEW_EMPLOYEE_NAME_CHANGED,
    payload: name
})

const deleteEmployeeSuccess = (employee) => ({
    type: EMPLOYEE_DELETE_SUCCESS,
    payload: employee
})

export const createNewEmployee = (name) => 
    dispatch => {
        fetch(EMPLOYEES_URL, 
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

export const editEmployee = employee => (
    {
        type: EMPLOYEE_EDIT,
        payload: employee
    }
)

export const deleteEmployee = id => 
    dispatch => 
        axios.delete(`${EMPLOYEES_URL}/${id}`)
            .then(response => dispatch(deleteEmployeeSuccess(response.data)))
    

export const changeModalValue = name => (
    {
        type: MODAL_NAME_CHANGED,
        payload: name
    }
)

export const submitModal = employee => 
    dispatch => 
        axios.post(`${EMPLOYEES_URL}/${employee.get('id')}`, employee.toJS())
            .then(response => 
                dispatch(employeeUpdateSuccess(response.data))
            )

export const employeeUpdateSuccess = data => (
    {
        type: EMPLOYEE_UPDATE_SUCCESS,
        payload: data
    }
)

export const closeModal = () => ({type: MODAL_CLOSE})
