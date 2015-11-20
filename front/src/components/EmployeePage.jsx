import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import EmployeeAddForm from './EmployeeAddForm'


export default class EmployeePage extends Component {

    render() {
        const { employees, newEmployeeName, employeeActions } = this.props
        return (
            <div className="employeePage">
                <h2>Employees</h2>
                <EmployeeList employees={employees} />
                <EmployeeAddForm name={newEmployeeName} actions={employeeActions} />
            </div>
            )
    }


    componentDidMount() {
        const { employeeActions: { fetchEmployees } } = this.props
        fetchEmployees()
    }
}
