import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./home.css";

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/778301e9-360c-4ed9-89f3-0f39d0a4c804")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      // If user confirms, log them out and redirect to the home page
      window.location.href = "/logout";
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
          <div key={index} className="ClumsyData">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Clumsiness: {user.clumsiness_tagline}</p>
            {user.image && <img src={user.image} alt={user.name} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
