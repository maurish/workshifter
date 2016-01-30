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
                endTime: '13.01.2016 16:00',
                id: 0
            },
            {
                startTime: '14.01.2016 18:00',
                endTime: '15.01.2016 04:00',
                id: 1
            }
        ],
        nextShiftID: 2
    },
    {
        name: "Johannes Elmnäinen",
        id: 2,
        shifts: [
            {
                startTime: '13.01.2016 10:00',
                endTime: '13.01.2016 18:00',
                id: 0
            },
            {
                startTime: '14.01.2016 14:00',
                endTime: '15.01.2016 22:00',
                id: 1
            }
        ],
        nextShiftID: 2
    }
]


router.get('/employees', (req, res, next) => {
    res.json(employees)
})

router.post('/employees', (req, res, next) => {
    let newEmp = {
        name: req.body.name,
        id  : nextID++,
        shifts: []
    }
    employees.push(newEmp)
    res.json(newEmp)
})

router.post('/employees/:id', (req, res, next) => {
    let employee = employees.find(e => e.id == req.params.id)
    Object.assign(employee, req.body)
    res.json(employee)
})

router.delete('/employees/:id', (req, res, next) => {
    employees = employees.filter(employee => employee.id != req.params.id)
    res.send(req.params.id)
})

router.post('/employees/:id/shifts', (req, res, next) => {
    let employee = employees.find(employee => employee.id == req.params.id)

    let shift = {
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        id: employee.nextShiftID++
    }

    employee.shifts.push(shift)
    res.send(shift)
})

router.delete('/employees/:employeeID/shifts/:shiftID', (req, res, next) => {
    employees.forEach(employee => {
        if (employee.id == req.params.employeeID) {
            employee.shifts = employee.shifts.filter(shift => shift.id != req.params.shiftID)
            let response = {
                employeeID: req.params.employeeID,
                shiftID: req.params.shiftID
            }
            res.send(response)
        }
    })
})

app.use('/api', router)

app.listen(port)
console.log('Server start on port', port)
