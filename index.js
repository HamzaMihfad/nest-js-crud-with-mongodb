const express = require("express");
const morgan = require("morgan");

// routes
const icons = require("./routes/icons");

// server
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, "0.0.0.0");
console.log(`http server listening on ${process.env.PORT || 3000}`);

// app.all('/api/*', wall);
app.use(icons);
