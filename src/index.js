import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AnimeDetails, SearchAnime, TopAnime } from './components';
import SeaasonalAnime from './components/Anime/SeasonalAnime';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />

    <Route path="view/anime" element={<AnimeDetails />} >
      <Route path=':animeID' element={<AnimeDetails />} />
    </Route>

    <Route path="search" element={<SearchAnime />} />

    <Route path="top-anime" element={<TopAnime />} />

    <Route path="seasonal-anime" element={<SeaasonalAnime />} />

  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);