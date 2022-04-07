


require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT
const cors = require('cors');

app.use(logger('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'you have hit the default route...nothing to see here'
    })
})

const paymentsController = require('./controllers/paymentRoutes.js')
app.use('/payments', paymentsController)

app.listen(PORT, () => {
    console.log(`listening in on port: ${PORT}`)
})