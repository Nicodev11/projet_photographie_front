const express = require("express");
const userRoutes = require("./routes/user.routes");
const imageRoutes = require('./routes/image.routes');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
require("./config/db");
const {checkUser} = require("./middleware/auth.middleware");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,POST,PUT,DELETE',
  'preflightContinue': false
  })
);

// JWT
app.get("*", checkUser);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/image", imageRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log("Le serveur est demarrer au port " + process.env.PORT);
});

