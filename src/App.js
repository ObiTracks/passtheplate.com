import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Listings from './Components/Listings/Listings';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/listings" exact component={Listings} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default App;
