const Payment = require("./../models/payment");
const seedData = require("./seedData.json");

// deletes all objects in memory
const seedDataBase = async () => {
  await Payment.deleteMany({});
  // inserts seeddata.json file into memory
  await Payment.insertMany(seedData);
  // prints confirmation message
  console.log("added data");
  process.exit();
};
seedDataBase()
