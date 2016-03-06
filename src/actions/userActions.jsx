import firebase from '../firebase'
import { history } from '../router'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})

export const login = (formData) => 
    dispatch =>
        firebase.authWithPassword(
            formData, 
            (error, authData) => {
                if (error) {
                    console.log(error)
                    return;
                }
                dispatch(loginSuccess())
                history.push('/')
        })


