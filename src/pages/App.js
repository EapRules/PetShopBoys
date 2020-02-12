import React from 'react';
// Importing web layout
import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
// Importing React Router
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
// Importing Pages
import Home from './Home'
import FullMarket from '../Components/Market/FullMarket'
import Turnos from '../Components/Turnos/Turnos';
import TurnosAdmin from '../Components/Admin-Page/Turnos-admin/Turnos-admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' render={() => (<Home />)} />
        {/* <Route exact path='/login' component={Home} /> */}
        <Route exact path='/tienda' render={() => (<FullMarket />)} />
        <Route exact path='/turnos' render={() => (<Turnos />)} />
        <Footer />
        <TurnosAdmin />

      </Router>
    </div>
  );
}

export default App;