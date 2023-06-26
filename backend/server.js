const express = require("express");
const userRoutes = require("./routes/user.routes");
const imageRoutes = require('./routes/image.routes');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./config/db");
const {checkUser} = require("./middleware/auth.middleware");

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// JWT
app.get("*", checkUser);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/image", imageRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log("Le serveur est demarrer au port " + process.env.PORT);
});

