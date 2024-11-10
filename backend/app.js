require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");

const mongoose = require("mongoose");

//Routers
const productsRouter = require("./routers/products");
const usersRouter = require("./routers/users");
const categoryRouter = require("./routers/categories");
const cors = require("cors");
// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors())


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
app.use(`${api}/users`, usersRouter);
app.use(`${api}/category`, categoryRouter);
