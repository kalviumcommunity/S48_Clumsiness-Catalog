const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const port = 3001;
const cors = require("cors");
const UsersModel = require("./models/Users");

app.use(cors());
app.use(express.json());
app.use("/", routes);

async function Connection() {
  try {
    await mongoose.connect(
      "mongodb+srv://ananya:kini99@cluster0.so9wpsx.mongodb.net/Clumsiness"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
}

app.get("/", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/status", (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  res.send(`Database Connection Status: ${dbStatus}`);
});

app.get("/getUsers", (req, res) => {
  UsersModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

Connection().then(() => {
  app.listen(port, () => {
    console.log("Connected to port", port);
  });
});

module.exports = app;
