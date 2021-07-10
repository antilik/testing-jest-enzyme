const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./router");

const app = express();
app.disable("x-powered-by");

// DB Setup
mongoose.connect("mongodb://127.0.0.1:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

// App setup
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log("Server is listening on:", port);
