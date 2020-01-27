import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Sidebar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item active">
                                    <a className="nav-link"> // eslint-disable-line
                                        <i className="nc-icon nc-chart-pie-35"></i>
                                        <h4>Panel Administrador</h4>
                                    </a>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to="/admin/usuarios">
                                        <i className="nc-icon nc-circle-09"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        Usuarios
                        </NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to="/admin/productos">
                                        <i className="nc-icon nc-notes"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                        Productos
                        </NavLink>
                                </li>

                            </ul>


                        </div>
                    </nav>
                </div>

            </div>

        );
    }
}

export default Sidebar;