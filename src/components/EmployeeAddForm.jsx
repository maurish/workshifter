'use strict'
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class EmployeeAddForm extends Component {
    
    render() {
        const { fields: {name}, handleSubmit, actions } = this.props
        return(
            <div className="EmployeeAddForm">
                <label>
                    Name 
                    <br />
                    <input {...name} />
                </label>
                <button onClick={handleSubmit(actions.createNewEmployee)}>
                    Submit
                </button>
            </div>
        )
    }
}

export default reduxForm({
    form: 'EmployeeAddForm',
    fields: ['name']
})(EmployeeAddForm)
