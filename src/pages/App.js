import React from 'react';

// Importing web layout

import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Admin from '../Components/Admin-Page/Admin';
import Consultas from '../Components/Consultas/Consultas';

// Importing React Router

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// Importing Pages

import Home from './Home'
import FullMarket from '../Components/Market/FullMarket'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' render={() => (<Home />)} />
        {/* <Route exact path='/login' component={Home} /> */}
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/consultas" component={Consultas} />
        <Route exact path='/tienda' render={() => (<FullMarket />)} />
        <Footer />

        {/* <Router>
        <main>
          <Navbar />
            <Switch>
            <Route exact path="/">
              <Slider/>
              <Services />
              <Market />
              </Route>
              <Route exact path="/admin" component={Sidebar}>
              </Route>
              <Route exact path="/admin/productos" component={Sidebar,ProductList}/>
          
          </Switch>
          <Footer/>
        </main> 
      </Router> */}
      </Router >
    </div>
  );
}

