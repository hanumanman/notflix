import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import NavBar from "./components/Header/navbar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { Route, Routes } from "react-router-dom";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import SearchResult from "./pages/Results/SearchResult";
import FilterGenreResults from "./pages/Results/FilterGenreResults";
import FilterTopRatedResults from "./pages/Results/FilterTopRatedResults";
import FilterNewestResult from "./pages/Results/FilterNewestResult";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
        <Route path="/browse" element={<FiltersPage />}>
          <Route path="genre/:genre" element={<FilterGenreResults />} />
          <Route path="top-rated" element={<FilterTopRatedResults />} />
          <Route path="newest" element={<FilterNewestResult />} />
        </Route>
        <Route path="search/*" element={<SearchResult />} />
      </Routes>
    </React.Fragment>
  );
}

// TODO: NAVBAR, ROUTES & DETAIL PAGE
export default App;
