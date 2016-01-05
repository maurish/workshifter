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


router.get('/employees', (req, res, next) => {
    res.json(employees)
})

router.post('/employees', (req, res, next) => {
    let newEmp = {
        name: req.body.name,
        id  : nextID++
    }
    employees.push(newEmp)
    res.json(newEmp)
})

router.post('/employees/:id', (req, res, next) => {
    employees.forEach(function update(employee) {
        if (employee.id == req.params.id) {
            employee.name = req.body.name
            res.send(employee)
        }
    })
    
})

router.delete('/employees/:id', (req, res, next) => {
    employees = employees.filter(employee => employee.id != req.params.id)
    res.send(req.params.id)
})

app.use('/api', router)

app.listen(port)
console.log('Server start on port', port)
