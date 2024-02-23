import React from "react";
import "./First.css";

function First() {
  return (
    <div>
      {/* Navbar section */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo">Clumsi-log</div>
        {/* Sign In button */}
        <div className="signIn">
          <button id="signIn">Sign In</button>
        </div>
        {/* Search bar */}
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

      {/* Content section */}
      <div className="content">
        {/* Left content section */}
        <div className="left-content">
          <h1>Welcome to Clumsi-Log</h1>
          {/* Main content */}
          <p>
            <br />
            Do you often trip over your feet or clumsily drop things?
            <br /> Welcome to Clumsi-Log, your personalized diary for all things
            clumsy! <br />
            With Clumsi-Log, effortlessly document your mishaps, share amusing
            anecdotes, <br />
            and connect with others who embrace their unique clumsiness.
            <br /> Join us in celebrating the joy of being beautifully imperfect{" "}
            <br /> <br />
          </p>
          {/* List of features */}
          <ul>
            <li>Keep track of all your clumsy moments, big or small</li>
            <li>Share your clumsy adventures with friends and family</li>
            <li>Laugh at yourself and embrace your clumsiness</li> <br />
          </ul>
          {/* Call to action */}
          <p>Sign up today and join our community of clumsy enthusiasts!</p>
        </div>

        {/* Right content section */}
        <div className="right-content">
          {/* Image */}
          <img
            src="https://www.theboltonnews.co.uk/resources/images/8782501/?type=responsive-gallery-fullscreen"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default First;
