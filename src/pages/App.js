import React from 'react';

// Importing web layout

import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

// Importing React Router

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// Importing Pages

import Home from './Home'
import FullMarket from './FullMarket'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/login' component={Home} /> */}
        <Route exact path='/tienda' component={FullMarket} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;