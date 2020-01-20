import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
      <Market />
      <Footer />
    </div>
  );
}

export default App;
