import React from "react";
import "./Form.css"; // Import the CSS file

function Form(props) {
  return (
    <div className="container">
      <div className="sign-in-form sage-form">
        <h2>Sign In</h2>
        <form>
          {/* Form fields */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="registrationDate">Registration Date:</label>
          <input type="text" id="registrationDate" name="registrationDate" />

          <label htmlFor="lastLoginDate">Last Login Date:</label>
          <input type="text" id="lastLoginDate" name="lastLoginDate" />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
