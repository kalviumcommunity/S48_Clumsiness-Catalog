import React from "react";
import "./Form.css"; // Import the CSS file

function Form(props) {
  return (
    <div className="container">
      <div className="sign-in-form sage-form">
        <h2>Sign In</h2>
        <form>
          {/* Form fields */}
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
