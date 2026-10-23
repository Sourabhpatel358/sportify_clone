const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const authRoute = require("./routes/auth.route");
const musicRoute = require("./routes/music.route");

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/music", musicRoute);

module.exports = app;
