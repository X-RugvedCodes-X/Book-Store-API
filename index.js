"use strict";
const log = (...value) => console.log(...value);

const express = require("express");
const connectToDB = require("./database/db.js");
require("dotenv").config();
const bookRoutes = require("./routes/book-routes.js");
const app = express();
const PORT = process.env.PORT || 3000;

//* Connect to Database
connectToDB();

//* Middleware -> express.json() - Middlware which will only parse json
app.use(express.json());

//* Routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => log(`Server is Listening on PORT: ${PORT}`));