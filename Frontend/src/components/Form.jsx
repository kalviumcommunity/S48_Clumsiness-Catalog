import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    Email: "",
    RegistrationDate: "",
    LastLoginDate: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Destructure formData
    const { Username, Password, Email } = formData;

    // Check if required fields are not empty
    if (!Username || !Password || !Email) {
      window.alert("Username, password, and email are required.");
      return;
    }

    // Check if password meets criteria
    if (Password.length < 6 || Password.length > 10) {
      setPasswordError("Password must be between 6 and 10 characters.");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/createUser",
        formData
      );
      console.log(response.data);
      window.alert("Registration successful!");
      window.location.href = "/Home";
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.status === 400) {
        // Display validation errors returned by the server
        window.alert(error.response.data.error);
      } else {
        // Handle other server errors
        window.alert("Failed to submit form. Please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <div className="sign-in-form sage-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
          {passwordError && <p className="error">{passwordError}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />

          <label htmlFor="registrationDate">Registration Date:</label>
          <input
            type="text"
            id="registrationDate"
            name="RegistrationDate"
            value={formData.RegistrationDate}
            onChange={handleChange}
          />

          <label htmlFor="lastLoginDate">Last Login Date:</label>
          <input
            type="text"
            id="lastLoginDate"
            name="LastLoginDate"
            value={formData.LastLoginDate}
            onChange={handleChange}
          />

          {/* Use Link to navigate to data page after form submission */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
