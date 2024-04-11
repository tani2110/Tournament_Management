import React from "react";
import "./App.css";
import HomePage from "./Components/home-page/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
