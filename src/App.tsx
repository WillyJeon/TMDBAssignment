import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { FaHome, FaPlay } from "react-icons/fa";
import { TbChartBarPopular } from "react-icons/tb";
import { MdStarRate } from "react-icons/md";
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
          <NavLink link="/popular">
            <FaHome /> Home
          </NavLink>
          <NavLink link="/popular">
            <TbChartBarPopular /> Popular Movies
          </NavLink>
          <NavLink link="/now-playing">
            <FaPlay /> Now Playing
          </NavLink>
          <NavLink link="/top-rated">
            <MdStarRate /> Top Rated
          </NavLink>
        </Navbar>

        <Routes>
          <Route path="/:movieType" element={<MovieList />} />
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
