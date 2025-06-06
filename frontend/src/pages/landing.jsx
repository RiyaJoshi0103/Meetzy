import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

// Import Navbar and Footer components
import Navbar from "../Navbar"; // adjust path if needed
import Footer from "../footer"; // adjust path if needed

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      {/* Use Navbar component */}
      <Navbar />

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>
          <p>Cover a distance by Apna Video Call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="mobile" />
        </div>
      </div>

      {/* Use Footer component */}
      <Footer />
    </div>
  );
}
