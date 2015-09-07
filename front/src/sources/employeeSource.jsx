import { apiUrl } from '../config'

export default  {
    fetch () {
        return fetch(apiUrl)
        .then((response) => response.json() )
        .then((employees) => {
            return employees
        })
    }
}
