const mongoose = require('mongoose')
// local host may need to be updated if this is currently in use on local machine
mongoose.connect('mongodb://127.0.0.1:27017/pointsChallenge')

module.exports = mongoose;