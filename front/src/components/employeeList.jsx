'use strict'
import React, { Component } from 'react'
import Employee from './employee'

export default class EmployeeList extends Component {

    render() {
        var employees = this.props.employees.map((employee) => {
            return(
                <Employee employee={employee} key={employee.id} />
            )
        })

        return(
            <div className="employeeList">
                <h2>Employees of the Month</h2>
                <div> {employees}</div>
            </div>
        )
    }

}

