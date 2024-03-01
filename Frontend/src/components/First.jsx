import "./First.css";
import { Link } from "react-router-dom";

function First() {
  return (
      <div>
        <div className="navbar">
          <div className="logo">Clumsi-log</div>
          <div className="signUp">
            <Link to="/signup" id="signUpButton">Sign Up</Link>
          </div>
          <div className="signIn">
            <Link to="/signin" id="signInButton">Sign In</Link>
          </div>
          <div className="data">
            <Link to="/data" id="datButton">Explore</Link>
          </div>
        </div>


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

        <div className="footer-container">
          <footer className="footer">
            <div className="footer-logo">
              <span className="footer-company">© 2024 Company, Inc</span>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default First;
