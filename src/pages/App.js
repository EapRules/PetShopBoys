import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';
import Footer from '../Components/Footer/Footer';
import ProductList from '../Components/Admin-Page/Product-list/Product-list';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Slider />
      <Services />
      <Market />
      <Footer />
      </Router>
    </div>
  );
}

export default App;