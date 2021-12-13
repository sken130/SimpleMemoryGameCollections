import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Game1Menu, WrappedGame1Menu} from './routes/Game1Menu.jsx';
import Game1 from './routes/Game1.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './routes/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<HomePage />} />
          <Route path="game1" element={<WrappedGame1Menu />} />
          <Route path="/game1/game1Start" element={<Game1 />} />

          <Route index element={<Navigate to="home" />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
