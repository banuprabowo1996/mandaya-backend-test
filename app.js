const express = require('express')
const cors = require('cors')
const Controller = require('./controllers')
const errorHandler = require('./errorHandler')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', Controller.register)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})