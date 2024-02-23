const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

async function Connection() {
  try {
    await mongoose.connect(
      "mongodb+srv://ananya:kini99@cluster0.so9wpsx.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
}
app.use(express.json());
app.use("/", routes);
app.get("/", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/status", (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  res.send(`Database Connection Status: ${dbStatus}`);
});

Connection().then(() => {
  app.listen(port, () => {
    console.log("connected to port");
  });
});

module.exports = app;
