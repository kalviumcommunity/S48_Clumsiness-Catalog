// SignInForm.js
import React, { useState } from "react";
import "./SignIn.css";

function SignInForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here, for example, sending the form data to a server
    console.log("Submitted form data:", formData);
    // Reset form after submission
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
