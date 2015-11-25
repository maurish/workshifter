const   express = require('express')
,       app = express()
,       bodyParser = require('body-parser')
,       cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 8083

const router = express.Router()

let nextID = 3
let employees = [
    {
        name: "Pauli Perälä",
        id: 1
    },
    {
        name: "Johannes Elmnäinen",
        id: 2
    }
]

const EMPLOYEES = 'employees'
router.get('/' + EMPLOYEES, (req, res, next) => {
    res.json(employees)
})

router.post('/' + EMPLOYEES, (req, res, next) => {
    let newEmp = {
        name: req.body.name,
        id  : nextID++
    }
    employees.push(newEmp)
    res.json(newEmp)
})

app.use('/api', router)

app.listen(port)
console.log('Server start on port', port)
