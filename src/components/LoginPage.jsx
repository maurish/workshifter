import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class LoginPage extends Component {

    render() {
        const { fields: {email, password}, handleSubmit, login} = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(login)}>
                        <label>Email
                            <input type="text" {...email} />
                        </label>
                        <br />
                        <label>Password
                            <input type="password" {...password} />
                        </label>
                        <button onClick={handleSubmit(login)}>
                            Login
                        </button>
                </form>
            </div>)
    }
}

export default reduxForm({
    form: 'LoginPage',
    fields: ['email', 'password']
})(LoginPage)
