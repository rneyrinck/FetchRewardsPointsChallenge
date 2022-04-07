const Payment = require('./../models/payment');
const seedData = require('./seedData.json');


// deletes all objects in memory
Payment.deleteMany({}).then(() => {
    // inserts seeddata.json file into memory
    Payment.insertMany(seedData).then(() => {
        // prints confirmation message
        console.log('added data')
        process.exit()
    })
})

