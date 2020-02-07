import React, { Component } from 'react'

// Importing web layout

import ProductList from './Product-list/Product-list'
import UserList from './User-list/User-list'
import Sidebar from './Sidebar/Sidebar'

// Importing React Router

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";


export default class Admin extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                <Sidebar/>
                <ProductList/>
                <UserList/>
                </Router>
            </div>
        )
    }
}
