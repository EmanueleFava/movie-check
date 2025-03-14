import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import Movies from '../pages/movies/Movies'
import MovieDetails from '../pages/movieDetails/MovieDetails'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movieDetails" element={<MovieDetails />} />
    </Routes>
  );
}

export default AppRouter;
