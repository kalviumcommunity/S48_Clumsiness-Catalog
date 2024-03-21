import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://clumisness-catalogue.onrender.com/signin",
        formData
      );
      alert("Successfully Signedin ");
      // window.location.href = "/home";
      nav("/home");
      // console.log("Sign-in successful. Token:", response.data.token);
      console.log("Sign-in successful. Token:", response.data);

      Cookies.set("username", response.data.name);
      Cookies.set("jwtToken", response.data.token);
    } catch (error) {
      console.error("Sign-in failed:", error);
      alert("Sign-in failed. Please check your credentials.");
    }
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
