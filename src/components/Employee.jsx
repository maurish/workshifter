import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        const { employee, actions: {deleteEmployee, editEmployee} } = this.props
        const employeeID = employee.get('id')
        return(
            <div className="single-employee">
                <h2 className="name">
                    {employee.get('name')}
                </h2>
                <button onClick={deleteEmployee.bind(null, employeeID)}>Delete</button>
                <button onClick={editEmployee.bind(null, employee)}>Edit</button>
                <section className="shifts">
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
