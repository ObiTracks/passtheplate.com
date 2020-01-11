import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../Components'
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
