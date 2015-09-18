import { apiUrl } from '../config'
import { List } from 'immutable'

export default  {
    fetch () {
        return fetch(apiUrl)
        .then((response) => response.json() )
        .then((employees) => {
            return new List(employees)
        })
    }
}
