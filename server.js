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

var parser = require('body-parser')
app.use(parser.json())

// app.get('/', (req, res, next) => {
//     res.send('hello world')
// })

app.get('/', (req, res, next) => {
    knex('testItems')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

// app.get('/alluserdata', (req, res, next) => {
//     return knex('users')
//         .then(users => {
//             const getComments = users.map(user => {
//                 return knex('comments')
//                     .where({ user_id: user.id })
//                     .then(comments => {
//                         user.comments = comments
//                         return user
//                     })
//             })
//             return Promise.all(getComments)
//         })
//         .then(result => res.send(result))
// })

// app.get('/users', (req, res, next) => {
//     knex('users')
//         .then((rows) => {
//             res.send(rows)
//         })
//         .catch((err) => {
//             next(err)
//         })
// })

// app.get('/comments', (req, res, next) => {
//     knex('comments')
//         .then((rows) => {
//             res.send(rows)
//         })
//         .catch((err) => {
//             next(err)
//         })
// })

// app.post('/comments', (req, res, next) => {
//     knex('comments').insert(req.body)
//         .then((rows) => {
//             res.send(rows);
//         })
//         .catch((err) => {
//             next(err)
//         })
// })

//edit:
// app.put('/comments/:id', (req, res, next) => {
//     console.log('req.body', req.body)
//     knex('comments').update(req.body).where('id', req.params.id).returning('*')
//         .then((rows) => {
//             res.send(rows);
//         })
//         .catch((err) => {
//             next(err)
//         })
// })

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
