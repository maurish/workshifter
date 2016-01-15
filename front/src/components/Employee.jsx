import React, { Component } from 'react'
import ShiftAddForm from './ShiftAddForm'

export default class Employee extends Component {
    render() {
        const { employee, actions: {deleteEmployee, editEmployee} } = this.props
        return(
            <div className="singleEmployee">
                <h2 className="name">
                    {employee.get('name')}
                </h2>
                <button onClick={deleteEmployee.bind(null, employee.get('id'))}>Delete</button>
                <button onClick={editEmployee.bind(null, employee)}>Edit</button>
                <section className="shifts">
                    <h4>Shifts:</h4>
                    <ul>
                        {employee.get('shifts').map( (shift, i) => (
                            <li key={i}>
                                {shift.get('startTime')} - {shift.get('endTime')}
                                <button onClick={this.props.actions.removeShift.bind(null, shift.get('id'), employee.get('id'))}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Add new shift</h4>
                    <ShiftAddForm addNewShift={this.props.actions.addNewShift} employeeId={employee.get('id')} formKey={'addShift-' + employee.get('id')} />
                </section>
            </div>
        )
    }
}
