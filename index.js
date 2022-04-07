require("dotenv").config();
const express = require("express");

const cors = require("cors");
const logger = require("morgan");

const PORT = process.env.PORT;

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    msg: "you have hit the default route...nothing to see here",
  });
});

const paymentsController = require("./controllers/paymentRoutes.js");
app.use("/payments", paymentsController);

app.listen(PORT, () => {
  console.log(`listening in on port: ${PORT}`);
});
