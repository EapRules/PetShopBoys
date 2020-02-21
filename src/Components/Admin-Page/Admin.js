import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ProductList from './Product-list/Product-list'
import Userlist from './User-list/User-list'
import Sidebar from './Sidebar/Sidebar'
import ConsultaAdmin from '../Consultas/Admin/ConsultaAdmin'
import TurnosAdmin from './TurnosAdmin/TurnosAdmin'

// Importing React Router
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
                        {this.state.currentPage === 'consultaAdmin' ? <ConsultaAdmin /> : null}
                        {this.state.currentPage === 'turnosAdmin' ? <TurnosAdmin /> : null}
                    </div >
                )
            }
        } else {
            return (
                <Redirect to='/' />)
        }
    }
}
