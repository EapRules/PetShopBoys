import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Landing from '../Components/Landing/Landing';
import Footer from '../Components/Footer/Footer';
import Admin from '../Components/Admin-Page/Admin';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
      <Admin />
    </div>
  );
}

export default App;
