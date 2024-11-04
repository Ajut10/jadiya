require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const productsRouter = require("./routers/products");
// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

const api = process.env.API_URL;

mongoose
  .connect(process.env.MONGO_URl)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Connected to database listening on ", process.env.PORT);
      console.log(api);
    }),
  )
  .catch((err) => {
    console.log(err);
  });

app.use(`${api}/products`, productsRouter);
