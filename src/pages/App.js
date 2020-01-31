import React from 'react';

// Importing web layout

import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

// Importing React Router

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// Importing Pages

import Home from './Home'
import FullMarket from '../Components/Market/FullMarket'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' render={() => (<Home />)} />
        {/* <Route exact path='/login' component={Home} /> */}
        <Route exact path='/tienda' render={() => (<FullMarket />)} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;