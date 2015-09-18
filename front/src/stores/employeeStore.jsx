import { List } from 'immutable'

import alt from '../alt'
import EmployeeActions from '../actions/employeeActions'
import EmployeeSource from '../sources/employeeSource'

class EmployeeStore {
    constructor() {
        this.bindActions(EmployeeActions)
        this.state = { employees: new List() }
    }

    onUpdateEmployees(employees) {
        this.setState({ employees })
    }
}

export default alt.createStore(EmployeeStore)
