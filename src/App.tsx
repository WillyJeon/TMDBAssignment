import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NavLink from "./components/Navlink";

function App() {
  const [bgStyle, setBgStyle] = useState({});
  return (
    <BrowserRouter>
      <div className="bg-[#333333] min-h-screen text-[#d5ccc7]" style={bgStyle}>
        <Navbar>
          <NavLink link="/">
            <FaHome /> Home
          </NavLink>
        </Navbar>

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route
            path="/movie/:id"
            element={<MovieDetails setBg={setBgStyle} />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
