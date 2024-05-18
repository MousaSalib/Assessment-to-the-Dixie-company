import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./utils/Home/Home";
import { Navbar } from "./utils/Navbar/Navbar";
import ChallengeOne from "./utils/ChallengeOne/ChallengeOne";

import ChallengeTwo from "./utils/ChallengeTwo/ChallengeTwo";
import ChallengeThree from "./utils/ChallengeThree/ChallengeThree";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge-one" element={<ChallengeOne />} />
          <Route path="/challenge-two" element={<ChallengeTwo />} />
          <Route path="/challenge-three" element={<ChallengeThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
