import React, { Component } from 'react'
import styles from './Employee.less'

export default class Employee extends Component {
    render() {
        const { employee, actions: {deleteEmployee, editEmployee} } = this.props
        const employeeID = employee.get('id')
        return(
            <div className={styles['single-employee']}>
                <h2>
                    {employee.get('name')}
                </h2>
                <button onClick={deleteEmployee.bind(null, employeeID)}>Delete</button>
                <button onClick={editEmployee.bind(null, employee)}>Edit</button>
                <section>
                    <h4>Shifts:</h4>
                    <ul>
                        {employee.get('shifts').map( (shift, i) => (
                            <li key={i}>
                                {shift.get('startTime')} - {shift.get('endTime')}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
}
