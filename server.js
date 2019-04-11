const express = require('express')
const app = express()
const port = process.env.PORT || 3002
// const dotenv = require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    knex('testItems')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

app.get('/educators', (req, res, next) => {
    knex('educators')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

app.get('/tests', (req, res, next) => {
    knex('tests')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

app.get('/students', (req, res, next) => {
    knex('students')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

app.get('/student_testItem', (req, res, next) => {
    knex('student_testItem')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

app.post('/student_testItem', (req, res, next) => {
    knex('student_testItem').insert(req.body)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})

app.post('/students', (req, res, next) => {
    knex('students').insert(req.body)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('something broke!')
})
app.use(function (err, req, res, next) {

    res.status(404).send('Sorry, cannot find that!')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
