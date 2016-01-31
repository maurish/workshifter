import React, { Component } from 'react'
import {reduxForm} from 'redux-form'

class ShiftAddForm extends Component {
    render() {
        const { fields: {startTime, endTime} } = this.props
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Start time: <br />
                    <input type="text" {...startTime} />
                </label>
                <br />
                <label>
                    End time: <br />
                    <input type="text" {...endTime} />
                </label> <br />
              <button type="submit">Submit</button>
            </form>
       )
    }

    handleSubmit(e) {
        const { employeeId, addNewShift, fields: {startTime, endTime} } = this.props
        e.preventDefault()
        addNewShift(employeeId, startTime.value, endTime.value)
    }
}

export default reduxForm({
    form: 'shiftAddForm',
    fields: ['startTime', 'endTime']
})(ShiftAddForm)
