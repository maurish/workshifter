const   express = require('express')
,       app = express()
,       bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// CORS
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
})

const port = process.env.PORT || 8083

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json(
        [
            {
                name: "Pauli Perälä",
                id  : 1
            },
            {
                name: "Johannes Elmnäinen",
                id  : 2
            }
        ]
    )
})

app.use('/api', router)

app.listen(port)
console.log('Server start on port', port)
