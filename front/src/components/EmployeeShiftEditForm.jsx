import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class EmployeeShiftEditForm extends Component {

    render() {
        const { employee, fields } = this.props
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <ul>
                  {fields.map( (field, i) => (
                      <li key={i}>
                        <input type="text" value={field.get('startTime')}></input> - <input type="text" value={field.get('endTime')}></input>
                      </li>
                  ))}
                </ul>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }
}

export default reduxForm({
  form: 'EmployeeShiftEditForm',
  fields: ['startTime', 'endTime']
})(EmployeeShiftEditForm)
