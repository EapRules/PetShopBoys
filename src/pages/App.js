import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';
import Footer from '../Components/Footer/Footer';
import ProductList from '../Components/Admin-Page/Product-list/Product-list';
import Sidebar from '../Components/Admin-Page/Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Slider />
              <Services />
              <Market />
            </Route>
            <Route exact path="/admin" component={Sidebar}>
            </Route>
            <Route exact path="/admin/productos" component={Sidebar, ProductList}>

            </Route>
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;