import Immutable from 'immutable'

import alt from '../alt'
import EmployeeActions from '../actions/employeeActions'
import EmployeeSource from '../sources/employeeSource'

class EmployeeStore {
    constructor() {
        this.bindActions(EmployeeActions)
        this.state = []
    }

    onUpdateEmployees(employees) {
        console.log(employees.map(p => p.name).join(','))
        this.setState(employees)
    }
}

export default alt.createStore(EmployeeStore)
