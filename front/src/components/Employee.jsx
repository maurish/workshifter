import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        const { employee, employee: {name, id}, actions: {deleteEmployee, editEmployee} } = this.props
        return(
            <div className="singleEmployee">
                <h2 className="name">
                    {name} is {Math.random()<0.5 ? 'not': ''} awesome
                </h2>
                <button onClick={deleteEmployee.bind(null, id)}>Delete</button>
                <button onClick={editEmployee.bind(null, employee)}>Edit</button>               
            </div>
        )
    }

    shouldComponentUpdate(newProps) {
        return newProps.employee.name !== this.props.employee.name;
    }
}
