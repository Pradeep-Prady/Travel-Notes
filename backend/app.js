const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const auth = require("./routes/auth");

app.use("/travelnotes/v1/", auth);

app.use(errorMiddleware);

module.exports = app;
