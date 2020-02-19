import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ProductList from './Product-list/Product-list'
import Userlist from './User-list/User-list'
import Sidebar from './Sidebar/Sidebar'

// Importing React Router
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';
import jwt from 'jsonwebtoken'


export default class Admin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentPage: "userList"
        }
    }

    changePage = (obj) => {
        this.setState(
            { currentPage: obj }
        )
    }

    render() {
        let token = localStorage.getItem('token')
        let isAdmin = token ? jwt.decode(token).isAdmin : null

        if (token) {
            if (!isAdmin) { return (<Redirect to='/' />) }
            else {
                return (
                    <div className="container" >
                        <Sidebar changePage={(obj) => this.changePage(obj)} />
                        {/* {this.state.isUserList ? <Userlist /> : <ProductList />} */}
                        {this.state.currentPage === 'userList' ? <Userlist /> : null
                        }
                        {this.state.currentPage === 'productList' ? <ProductList /> : null}

                    </div >
                )
            }
        } else {
            return (
                <Redirect to='/' />)
        }
    }
}
