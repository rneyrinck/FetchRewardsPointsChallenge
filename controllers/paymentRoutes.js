const express = require("express");

// const payment = require("./../models/payment");
const Payments = require("./../models/payment");
const router = express.Router();

// get all payments
router.get("/", (req, res) => {
  // find payments
  Payments.find({})
    .then((allPayments) => {
      // return payments
      res.status(200).json(allPayments);
    })
    // print error if one occurs
    .catch((err) => {
      console.log(err);
    });
});
// add payment and return all payments
router.post("/", (req, res) => {
  // creating payment
  Payments.create(req.body).then((payment) => {
    // returning all payments
    Payments.find({}).then((allPayments) => {
      // set status = OK
      res.status(200).json(allPayments);
    });
  });
});
// call points spend
router.patch("/", (req, res) => {
  // find all payments
  Payments.find({})
    // sort by oldest payment date
    .sort({ Date: "desc" })
    .then((payment) => {
      // .exec(function (err, payment) {
      // json body request -> "points": number
      let placeHolder = req.body;
      // for loop -> cycles through payments and subtracts the points spend json request from subsequent payments until it hits zero
      payment.map((payment) => {
        // points value of object at index[i]
        indexPoints = payment.points - placeHolder.points;
        // req.body points value abs value
        placeHolder.points = -1 * indexPoints;
        // set points of payment at index[i] to zero if its below zero
        if (indexPoints < 0) {
          indexPoints = 0;
        }
        // set points spend amount of points to zero if it falls below zero
        if (placeHolder.points < 0) {
          placeHolder.points = 0;
        }
        // updating points at index[i] to updated amount
        payment.points = indexPoints;
        // saving the updated payment
        payment.save();

        // console.log(payment);
      });
      return res.status(200).json(payment);

      // return payments
    })

    .catch((err) => console.log(err));
});

module.exports = router;
