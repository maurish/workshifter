import { apiUrl } from '../config'

export const EMPLOYEES_REQUEST          = 'EMPLOYEES_REQUEST'
export const EMPLOYEES_REQUEST_SUCCESS  = 'EMPLOYEES_REQUEST_SUCCESS'
export const EMPLOYEES_REQUEST_ERROR    = 'EMPLOYEES_REQUEST_ERROR'
export const NEW_EMPLOYEE_NAME_CHANGED  = 'NEW_EMPLOYEE_NAME_CHANGED'
export const CREATE_NEW_EMPLOYEE        = 'CREATE_NEW_EMPLOYEE'


const requestEmployees = () => ({type: EMPLOYEES_REQUEST})

const receiveEmployees = (employees) => ({
    type: EMPLOYEES_REQUEST_SUCCESS, 
    payload: employees
})

const requestEmployeesFailure = (error) => ({
    type: EMPLOYEES_REQUEST_ERROR,
    payload: error
})

export const fetchEmployees = () => 
    dispatch =>  {
        dispatch(requestEmployees())
            fetch(apiUrl)
            .then(response => response.json())
            .then(employees => dispatch(receiveEmployees(employees)))
            .catch(e => dispatch(requestEmployeesFailure(e)))
    }

export const newEmployeeNameChanged = (name) => ({
    type: NEW_EMPLOYEE_NAME_CHANGED,
    payload: name
})

export const createNewEmployee = (name) => ({
    type: CREATE_NEW_EMPLOYEE,
    payload: {name, id: 3}
})
