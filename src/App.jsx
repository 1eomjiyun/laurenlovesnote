// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Reviews from "./pages/Reviews";

function Home() {
  return (
    <div>
      <h1>Welcome to Lauren Loves Notes</h1>
      <p>This is my personal site where I share reviews and notes.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}
