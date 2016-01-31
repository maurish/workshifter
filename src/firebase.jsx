import Firebase from 'firebase'

const rootRef =  new Firebase('https://sweltering-torch-9198.firebaseio.com/')
export default rootRef
export const employeesDB = rootRef.child('employees')
