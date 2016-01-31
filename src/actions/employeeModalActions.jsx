import { employeesDB } from '../firebase'

export const MODAL_CLOSE                    = 'MODAL_CLOSE'
export const EMPLOYEE_UPDATE_SUCCESS        = 'EMPLOYEE_UPDATE_SUCCESS'

export const submitModal = (id, data) =>
    dispatch =>
        employeesDB.child(id).update(data, () => {
            dispatch(employeeUpdateSuccess(Object.assign(data, {id})))
        })

const employeeUpdateSuccess = data => (
    {
        type: EMPLOYEE_UPDATE_SUCCESS,
        payload: data
    }
)

export const closeModal = () => ({type: MODAL_CLOSE})
