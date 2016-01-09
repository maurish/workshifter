'use strict'
import React, { Component } from 'react'
import Employee from './Employee'

export default class EmployeeList extends Component {

    render() {
        const { employees } = this.props
        return(
            <div className="employeeList">
                <h2>Employees of the Month</h2>
                <div>{employees.map((employee, i) =>
                    (<Employee employee={employee} key={i} actions={this.props.employeeActions}/>)
                )}
                </div>
            </div>
        )
    }
}
