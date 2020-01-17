import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Market from '../Components/Market/Market';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Market />
      <Footer></Footer>
    </div>
  );
}

export default App;
