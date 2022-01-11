const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routes = require('./routes')
const app = express();
const PORT = 8000

// middlewares
app.use(morgan('dev')) // to show logs of api
app.use(express.json()) // to fetch data from request body

// routes
app.use(routes)

// connect with db
mongoose.connect('mongodb://localhost/mern-practice', {useNewUrlParser: true,
    useUnifiedTopology: true}, () => {
    console.log('DB connected')
})
// TODO: add error check

// Listen for a port and start the server
app.listen(PORT, () => {
    console.log('SERVER IS RUNNING AT' , PORT)
})