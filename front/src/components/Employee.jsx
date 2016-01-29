import React, { Component } from 'react'
import ShiftAddForm from './ShiftAddForm'

export default class Employee extends Component {
    render() {
        const { employee, actions: {deleteEmployee, editEmployee, removeShift, addNewShift} } = this.props
        const employeeID = employee.get('id')
        return(
            <div className="singleEmployee">
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
                                <button onClick={removeShift.bind(null, shift.get('id'), employeeID)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Add new shift</h4>
                    <ShiftAddForm addNewShift={addNewShift} employeeId={employeeID} formKey={'addShift-' + employeeID} />
                </section>
            </div>
        )
    }
}
