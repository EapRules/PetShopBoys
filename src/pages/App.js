import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';
import Footer from '../Components/Footer/Footer';
import UserList from '../Components/Admin-Page/User-list/User-list';
import Equipo from '../Components/Equipo/Equipo';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Services></Services>
      <Market />
      <Footer></Footer>
      <UserList></UserList>
      <Equipo></Equipo>
    </div>
  );
}

export default App;
