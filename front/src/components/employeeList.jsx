'use strict'
import React from 'react'
import Employee from './employee'
import EmployeeStore from '../stores/employeeStore'
import EmployeeActions from '../actions/employeeActions'

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { employees: EmployeeStore.getState() }
        this._onChange = this._onChange.bind(this)
    }

    render() {
        var employees = this.state.employees.map((employee) => {
            return(
                <Employee employee={employee} />
            )
        })

        return(
            <div className="employeeList">
                <h2>Employees of the Month</h2>
                <div> {employees}</div>
            </div>
        )
    }

    _onChange(employees) {
        this.setState( {employees} )
    }

    componentDidMount() {
        EmployeeStore.listen(this._onChange)
        EmployeeActions.fetchEmployees()
    }
}

