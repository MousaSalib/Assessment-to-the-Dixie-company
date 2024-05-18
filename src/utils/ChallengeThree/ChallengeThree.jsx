import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ChallengeThree.css";

const messages = [
  "Just Start And Just Do It",
  "Keep Going",
  "Almost There",
  "You Just Finshed",
];

const ChallengeThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="challenge-container">
      <h2>Challenge 3</h2>
      <div className="message-container">
        <h3 className="message">
          {currentIndex === 0 || currentIndex === 3
            ? messages[currentIndex]
            : `${currentIndex} ${messages[currentIndex]}`}
        </h3>
        <button
          className="message-buttons"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Previous
        </button>
        <button
          className="message-buttons"
          onClick={handleNext}
          disabled={currentIndex === messages.length - 1}
        >
          Next <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ChallengeThree;
