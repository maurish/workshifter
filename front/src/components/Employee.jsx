import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        const { employee: { name } } = this.props
        return(
            <div className="singleEmployee">
                <h2 className="name">
                    {name} is awesome
                </h2>
                <button onClick={this.props.actions.deleteEmployee.bind(null, this.props.employee.id)}>Delete</button>
            </div>
        )
    }
}
