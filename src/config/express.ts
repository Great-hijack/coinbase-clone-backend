import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
const cors = require("cors");
const morgan = require("morgan");

const { logs } = require("../config/config");
import routes from "../api/routes/index";

const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(routes);

module.exports = app;
