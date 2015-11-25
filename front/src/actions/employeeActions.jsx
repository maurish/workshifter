import { employeesUrl } from '../config'

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

const addNewEmployee = (employee) => ({
    type: CREATE_NEW_EMPLOYEE,
    payload: employee
})

export const fetchEmployees = () => 
    dispatch =>  {
        dispatch(requestEmployees())
            fetch(employeesUrl)
            .then(response => response.json())
            .then(employees => dispatch(receiveEmployees(employees)))
            .catch(e => dispatch(requestEmployeesFailure(e)))
    }

export const newEmployeeNameChanged = (name) => ({
    type: NEW_EMPLOYEE_NAME_CHANGED,
    payload: name
})

export const createNewEmployee = (name) => 
    dispatch => {
        fetch(employeesUrl, 
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
