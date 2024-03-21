import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./home.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userData, setUserData] = useState([]);
  let nav = useNavigate();

  useEffect(() => {
    fetch("https://mocki.io/v1/aea3367f-e63c-48d5-9bba-55eac7a2afc1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // If the data structure matches what you expect, you can set it to state here
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
              {user.Image && <img src={user.Image} alt={user.Name} />}
            </div>

            <div className="ClumsyData">
              <h3>{user.Name}</h3>
              <p>Email: {user.Email}</p>
              <p>Clumsiness: {user.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
