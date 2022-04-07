// const { timeStamp } = require('console')
const mongoose = require('./../db/connection')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    payer: String,
    points: Number,
    timeStamp: { type : Date, default: Date.now }
})


//export model named "Author"
module.exports = mongoose.model('Payment', paymentSchema)



