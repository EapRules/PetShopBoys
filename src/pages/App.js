import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';
import Footer from '../Components/Footer/Footer';
import ProductList from '../Components/Admin-Page/Product-list/Product-list';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Services></Services>
      <Market />
      <Footer></Footer>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
