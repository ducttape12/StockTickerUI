import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Profile from './Profile';
import Navigation from './Navigation';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation brand="Simple Stock Ticker" />
      <div className="container container-padding mt-3">
        <HashRouter>
            <Route exact path="/" component={Search} />
            <Route path="/profile/:symbol" component={Profile} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
