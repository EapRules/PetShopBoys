import React from 'react';
// Importing web layout
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Landing/Slider/Slider';
import Services from '../Components/Landing/Services/Services';
import Market from '../Components/Landing/Market/Market';
import Footer from '../Components/Footer/Footer';
import Admin from '../Components/Admin-Page/Admin';
import ProductList from '../Components/Admin-Page/Product-list/Product-list';
import Sidebar from '../Components/Admin-Page/Sidebar/Sidebar';
import Consultas from '../Components/Consultas/Consultas';

// Importing React Router
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// Importing Pages
import Home from './Home'
import FullMarket from '../Components/Market/FullMarket'
import Turnos from '../Components/Turnos/Turnos';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' render={() => (<Home />)} />
        {/* <Route exact path='/login' component={Home} /> */}
        <Route exact path="/admin" component={Sidebar}/>
        {/* <Route exact path="/consultas" component={Consultas} /> */}
        <Route exact path='/tienda' render={() => (<FullMarket />)} />
        <Route exact path='/turnos' render={() => (<Turnos />)} />
        <Route exact path='/consultas' render={() => (<Consultas />)}/>
        {/* <Route exact path='/admin' render={() => (<Admin/>)}/> */}
        <Footer />

      </Router>
    </div>
  );
}

