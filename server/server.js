import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import moment from 'moment'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 8083

const router = express.Router()

let nextID = 3
let employees = [
    {
        name: "Pauli Perälä",
        id: 1,
        shifts: [
            {
                startTime: '13.01.2016 08:00',
                endTime: '13.01.2016 16:00'
            },
            {
                startTime: '14.01.2016 18:00',
                endTime: '15.01.2016 04:00'
            }
        ]
    },
    {
        name: "Johannes Elmnäinen",
        id: 2,
        shifts: [
            {
                startTime: '13.01.2016 10:00',
                endTime: '13.01.2016 18:00'
            },
            {
                startTime: '14.01.2016 14:00',
                endTime: '15.01.2016 22:00'
            }
        ]
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
