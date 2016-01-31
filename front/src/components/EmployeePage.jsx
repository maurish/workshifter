import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import EmployeeAddForm from './EmployeeAddForm'
import EmployeeEditModal from './EmployeeEditModal'

export default class EmployeePage extends Component {

    render() {
        const { newEmployeeName, employeeActions, modal } = this.props

        return (
            <div className="employeePage">
                <section id="employees">
                    <h2>Employees</h2>
                    <EmployeeList {...this.props}/>
                    <EmployeeAddForm name={newEmployeeName} actions={employeeActions} />
                </section>
                { modal.get('isOpen') ? <EmployeeEditModal {...this.props} /> : null }
            </div>
        )
    }

    componentDidMount() {
        const { employeeActions: { fetchEmployees } } = this.props
        fetchEmployees()
    }
}
