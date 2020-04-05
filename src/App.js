import React from 'react';
import './App.css';
import Search from './Search';
import Profile from './Profile';
import Navigation from './Navigation';
import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation brand="Simple Stock Ticker" />
      <div className="container container-padding mt-3 flex-shrink-3">
        <HashRouter>
          <Route exact path="/" component={Search} />
          <Route path="/profile/:symbol" component={Profile} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
