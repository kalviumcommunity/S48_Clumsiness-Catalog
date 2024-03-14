import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./home.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userData, setUserData] = useState([]);
  let nav = useNavigate();

  useEffect(() => {
    fetch("https://mocki.io/v1/d37fabb9-b032-422f-b312-c22f1dc781ab")
      .then((response) => response.json())
      .then((data) => setUserData(data.students)) // Access students array
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      // If user confirms, log them out and redirect to the home page
      Cookies.remove("username");
      Cookies.remove("jwtToken");
      nav("/");
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">Clumsi-log</div>
        {/* Add onClick event handler to the Link */}
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="display-data">
        {userData.map((user, index) => (
          <div key={index} className="Clumsystyle">
            <div className="ClumsyImage">
              {user.image && <img src={user.image} alt={user.name} />}
            </div>

            <div className="ClumsyData">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Clumsiness: {user.clumsiness_tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
