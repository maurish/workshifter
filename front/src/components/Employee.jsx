import React, { Component } from 'react'
import ShiftAddForm from './ShiftAddForm'

export default class Employee extends Component {
    render() {
        const { employee, actions: {deleteEmployee, editEmployee} } = this.props
        console.log(this.props)
        return(
            <div className="singleEmployee">
                <h2 className="name">
                    {employee.get('name')} is {Math.random()<0.5 ? 'not': ''} awesome
                </h2>
                <section className="shifts">
                    <h4>Shifts:</h4>
                    <ul>
                        {employee.get('shifts').map( (shift, i) => (
                            <li key={i}>
                                {shift.get('startTime')} - {shift.get('endTime')}
                            </li>
                        ))}
                    </ul>
                    <h4>Add new shift</h4>
                    <ShiftAddForm addNewShift={this.props.actions.addNewShift} employeeId={employee.get('id')} />
                </section>
                <button onClick={deleteEmployee.bind(null, employee.get('id'))}>Delete</button>
                <button onClick={editEmployee.bind(null, employee)}>Edit</button>               
            </div>
        )
    }
}
