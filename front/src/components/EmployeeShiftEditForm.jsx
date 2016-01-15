import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

export default class EmployeeShiftEditForm extends Component {

    render() {
        console.log(this.props.fields)
        const { employee, fields } = this.props
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <ul>

                </ul>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
    }
}
