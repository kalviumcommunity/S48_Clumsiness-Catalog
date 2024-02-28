import "./First.css";
import Form from "./Form";
import axios from "axios";
import React, { useState, useEffect } from "react";

function First() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">Clumsi-log</div>
        <div className="signIn">
          <button id="signInButton" onClick={toggleFormVisibility}>
            {isFormVisible ? "Home" : "Sign In"}
          </button>
        </div>
        <div className="searchbar">
          <input
            type="text"
            id="search"
            name="q"
            placeholder="Search Here"
            required
          />
          <button type="submit" id="Search-button">
            Search
          </button>
        </div>
      </div>

      {isFormVisible ? (
        <Form />
      ) : (
        <div className="content">
          <div className="left-content">
            <h1>Welcome to Clumsi-Log</h1>
            <p>
              <br />
              Do you often trip over your feet or clumsily drop things?
              <br /> Welcome to Clumsi-Log, your personalized diary for all
              things clumsy!
              <br />
              With Clumsi-Log, effortlessly document your mishaps, share amusing
              anecdotes,
              <br />
              and connect with others who embrace their unique clumsiness.
              <br /> Join us in celebrating the joy of being beautifully
              imperfect
              <br /> <br />
            </p>
            <ul>
              <li>Keep track of all your clumsy moments, big or small</li>
              <li>Share your clumsy adventures with friends and family</li>
              <li>Laugh at yourself and embrace your clumsiness</li>
              <br />
            </ul>
            <p>Sign up today and join our community of clumsy enthusiasts!</p>
          </div>

          <div className="right-content">
            <img
              src="https://www.theboltonnews.co.uk/resources/images/8782501/?type=responsive-gallery-fullscreen"
              alt=""
            />
          </div>
        </div>
      )}

      <div className="mongo-container">
        {users &&
          users.map((user, id) => (
            <div className="mongo-data" key={id}>
              <p> Username: {user.Username}</p>
              <p> Email: {user.Email}</p>
              <p> RegistrationDate: {user.RegistrationDate}</p>
            </div>
          ))}
      </div>

      <div class="footer-container">
        <footer class="footer">
          <div class="footer-logo">
            <span class="footer-company">© 2024 Company, Inc</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default First;
