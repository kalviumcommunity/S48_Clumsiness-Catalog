const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const port = 3001;
const cors = require("cors");
const {UsersModel,JoiUserSchema} = require("./models/Users");

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
    console.error("MongoDB connection error:", err);
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
    .then(users => res.json(users))
    .catch(err => {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Failed to fetch users" });
    });
});

app.post("/createUser", async (req, res) => {
  const { Username, Password, Email, RegistrationDate, LastLoginDate } = req.body;

  const { error } = JoiUserSchema.validate({ Username, Password, Email, RegistrationDate, LastLoginDate });

  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }

  if (Password.length < 6 || Password.length > 10) {
    return res.status(400).json({ success: false, message: "Password must be between 6 and 10 characters long" });
  }

  try {
    const newUser = new UsersModel({
      Username, Password, Email, RegistrationDate, LastLoginDate
    });
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});



app.delete("/deleteUser/:userId", (req, res) => {
  const userId = req.params.userId;
  UsersModel.findByIdAndDelete(userId)
    .then(deletedUser => {
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully", deletedUser });
    })
    .catch(error => {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    });
});

// Update user route
app.put("/updateUser/:userId", (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body; // Assuming updated data is sent in the request body

  UsersModel.findByIdAndUpdate(userId, updatedUserData, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User updated successfully", updatedUser });
    })
    .catch(error => {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    });
});

Connection().then(() => {
  app.listen(port, () => {
    console.log("Connected to port", port);
  });
});

module.exports = app;