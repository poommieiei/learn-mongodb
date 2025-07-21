const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();


app.use(cors({
    origin: "*",
    methods: "GET, PUT, PATCH, POST, DELETE",
    allowedHeaders: "Content-Type, Authorization",
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This service for learning mongoDB with express.js by @poommieiei :D");
});

module.exports = app;