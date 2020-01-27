import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import Landing from '../Components/Landing/Landing';
import Footer from '../Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Consultas from '../Components/Consultas/Consultas';

function App() {
  return (
    <div className="App">
     
     <Router>
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
              <Route exact path="/admin/productos" component={Sidebar,ProductList}>
                
              </Route>
              <Route exact path="/consultas" component={Consultas}>
                
                </Route>
          </Switch>
          <Footer/>
        </main> 
      </Router>
    </div>
  );
}

export default App;
