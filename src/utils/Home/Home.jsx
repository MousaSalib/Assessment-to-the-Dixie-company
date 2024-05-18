import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="challenge-container">
      <h2>
        <FontAwesomeIcon icon={faHome} /> Home
      </h2>
      <p>
        Welcome to this assessment! Explore the challenges by clicking on the
        buttons in the navigation bar to access your chosen challenge.
      </p>
    </div>
  );
};
