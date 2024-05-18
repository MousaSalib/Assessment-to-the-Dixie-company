import React, { useState } from "react";
import { findIndexToRemove } from "./PalindromeChecker";
import "./ChallengeOne.css";

const ChallengeOne = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleCheck = () => {
    const index = findIndexToRemove(input);
    setResult(index);
  };

  return (
    <div className="challenge-container">
      <h2>Challenge 1</h2>
      <p>
        Given a string of lowercase letters, determine the index of the
        character that can be removed to make the string a palindrome.
      </p>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a string"
      />
      <button onClick={handleCheck}>Check</button>
      {result !== null && (
        <p>
          {result === -1
            ? "The string is already a palindrome or more than one character needs to be removed."
            : `Removing the character at index ${result} will make it a palindrome.`}
        </p>
      )}
    </div>
  );
};

export default ChallengeOne;
