import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SignIn.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let nav = useNavigate();

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
      const response = await axios.post(
        "http://localhost:3001/signin",
        formData
      );
      console.log("Sign-in successful. Token:", response.data);
      Cookies.set("username", response.data.name);
      alert("Successfully Signedin ");
      nav("/home");
      // You can store the token in localStorage or a cookie for future authenticated requests
    } catch (error) {
      console.error("Sign-in failed:", error.response.data.message);
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    async function toCheck() {
      try {
        let cookie = Cookies.get("username");
        console.log(cookie, "cookie");

        const response = await axios.post("http://localhost:3001/signin", {
          cookie,
        });
        console.log(response);

        if (response) {
          nav("/home");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    toCheck();
  }, []);

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
