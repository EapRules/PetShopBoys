import React, { Component } from 'react'
import ProductList from './Product-list/Product-list'
import Userlist from './User-list/User-list'
import Sidebar from './Sidebar/Sidebar'

// Importing React Router
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';


export default class Admin extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Route>
                        <Navbar/>
                    </Route>
                    <Route>
                        <Sidebar  />
                    </Route>
                    <Switch>
                        <Route>
                            <ProductList/>
                        </Route>
                        <Route>
                            <Userlist/>
                        </Route>
                    </Switch>
                    <Route>
                        <Footer/>
                    </Route>
                </Router>
                    
                
            </div>
        )
    }
}
