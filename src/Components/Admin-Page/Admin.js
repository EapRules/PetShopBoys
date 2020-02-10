import React, { Component } from 'react'
import ProductList from './Product-list/Product-list'
import Userlist from './User-list/User-list'
import Sidebar from './Sidebar/Sidebar'

// Importing React Router
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";


export default class Admin extends Component {
    render() {
        return (
            <div className="container">
                <Router>
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
                </Router>
                    
                
            </div>
        )
    }
}
