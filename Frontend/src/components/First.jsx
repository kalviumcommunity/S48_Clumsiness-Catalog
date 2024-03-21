import "./First.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";

const UserPopup = ({ selectedUser, onClose }) => {
  if (!selectedUser) return null;

  return (
    <>
      <div className="user-popup">
        <div className="user-info">
          <h3>{selectedUser.Username}</h3>
          <p>{selectedUser.Email}</p>
          <p>{selectedUser.Tagline}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

function First() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://clumisness-catalogue.onrender.com/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleOpenPopup = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
    document.getElementById("backdrop").style.display = "block";
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
    setIsPopupOpen(false);
    document.getElementById("backdrop").style.display = "none";
  };

  return (
    <div>
      <div id="backdrop"></div>
      <div className="navbar">
        <div className="logo">Clumsi-log</div>
        <div className="signUp">
          <Link to="/signup" id="signUpButton">
            Sign Up
          </Link>
        </div>
        <div className="signIn">
          <Link to="/signin" id="signInButton">
            Sign In
          </Link>
        </div>
        <div className="data">
          <div className="dropdown">
            <span className="explore-text">
              Explore <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <div className="dropdown-content">
              {users.map((user) => (
                <div key={user._id} onClick={() => handleOpenPopup(user)}>
                  {user.Username}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`content ${isPopupOpen ? "blur" : ""}`}>
        <div className="left-content">
          <h1>Welcome to Clumsi-Log</h1>
          <p>
            <br />
            Do you often trip over your feet or clumsily drop things?
            <br /> Welcome to Clumsi-Log, your personalized diary for all things
            clumsy!
            <br />
            With Clumsi-Log, effortlessly document your mishaps, share amusing
            anecdotes,
            <br />
            and connect with others who embrace their unique clumsiness.
            <br /> Join us in celebrating the joy of being beautifully imperfect
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

      <div className="footer-container">
        <footer className="footer">
          <div className="footer-logo">
            <span className="footer-company">© 2024 Company, Inc</span>
          </div>
        </footer>
        <UserPopup selectedUser={selectedUser} onClose={handleClosePopup} />
      </div>
    </div>
  );
}

export default First;
