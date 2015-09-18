import alt from '../alt'
import EmployeeSource from '../sources/employeeSource'
import { List } from 'immutable'

class EmployeeActions {
    constructor() {
        this.generateActions(['updateEmployees'])
    }

    fetchEmployees() {
        this.dispatch()
        EmployeeSource.fetch()
            .then((employees) => {
                this.actions.updateEmployees(employees)
            })
            .catch((errorMsg) => {
                this.actions.employeesFailed(errorMsg)
            })
    }

    employeesFailed(errorMsg) {
        this.dispatch(errorMsg)
    }
}

export default alt.createActions(EmployeeActions)
