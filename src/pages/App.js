import React from 'react';
// Importing web layout
import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
// import Sidebar from '../Components/Admin-Page/Sidebar/Sidebar';
import Admin from '../Components/Admin-Page/Admin'
import Consultas from '../Components/Consultas/Consultas';

// Importing React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing Pages
import Home from './Home'
import FullMarket from '../Components/Market/FullMarket'
import Turnos from '../Components/Turnos/Turnos';
import Success from '../Components/Screens/Success/Success';
import Fail from '../Components/Screens/Fail/Fail';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' render={() => (<Home />)} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path='/tienda' render={() => (<FullMarket />)} />
        <Route exact path='/turnos' render={() => (<Turnos />)} />
        <Route exact path='/consultas' render={() => (<Consultas />)} />
        <Route exact path="/compra/success" component={Success } />
        <Route exact path="/compra/failure" component={Fail } />
        <Footer />

      </Router>
    </div>
  );
}

