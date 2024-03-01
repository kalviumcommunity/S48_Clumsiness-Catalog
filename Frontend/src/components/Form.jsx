import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    registrationDate: "",
    lastLoginDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to save the form data
      const response = await axios.post(
        "http://localhost:3001/createUser",
        formData
      );
      console.log(response.data);
      // Display alert for successful sign-up
      window.alert("Registration successful!");
      // Redirect to the data page
      window.location.href = "/data";
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can handle error response here
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
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="registrationDate">Registration Date:</label>
          <input
            type="text"
            id="registrationDate"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
          />

          <label htmlFor="lastLoginDate">Last Login Date:</label>
          <input
            type="text"
            id="lastLoginDate"
            name="lastLoginDate"
            value={formData.lastLoginDate}
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
