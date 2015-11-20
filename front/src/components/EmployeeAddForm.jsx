'use strict'
import React, { Component } from 'react'

export default class EmployeeAddForm extends Component {
    
    render() {
        const { name } = this.props
        return(
            <div className="EmployeeAddForm">
                <label>
                    Name 
                    <br />
                    <input onChange={this.handleChange.bind(this)} type="text" value={name} />
                </label>
                <button onClick={this.handleSubmit.bind(this)}>
                    Submit
                </button>
            </div>
            )
    }

    handleChange(e) {
        const { actions } = this.props
        actions.newEmployeeNameChanged(e.target.value)
    }

    handleSubmit(e) {
        const { name, actions } = this.props 
        e.preventDefault()
        actions.createNewEmployee(name)
        return false
    }
}
