import { employeesDB } from '../firebase'

export const ADD_EMPLOYEE               = 'ADD_EMPLOYEE'
export const EMPLOYEE_DELETE_SUCCESS    = 'EMPLOYEE_DELETE_SUCCESS'
export const EMPLOYEE_EDIT              = 'EMPLOYEE_EDIT'


const addNewEmployee = employee => ({
    type: ADD_EMPLOYEE,
    payload: employee
})

export const fetchEmployees = () =>
    dispatch =>  
        employeesDB.on('child_added', data => 
            dispatch(addNewEmployee(Object.assign(data.val(), {id: data.key()})))    
        )

export const createNewEmployee = name =>
    dispatch => 
        employeesDB.push({name}, () => dispatch(addNewEmployee({name})))
    

export const editEmployee = employee => ({
    type: EMPLOYEE_EDIT,
    payload: employee
})

export const deleteEmployee = id =>
    dispatch =>
        employeesDB.child(id).remove(() => dispatch(deleteEmployeeSuccess(id)))

const deleteEmployeeSuccess = id => ({
    type: EMPLOYEE_DELETE_SUCCESS,
    payload: id
})
