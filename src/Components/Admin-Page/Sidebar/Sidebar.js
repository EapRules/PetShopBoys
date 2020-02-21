import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Sidebar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item active">
                                    <a className="nav-link">
                                        <i className="nc-icon nc-chart-pie-35"></i>
                                        <h4>Panel Administrador</h4>
                                    </a>
                                </li>
                                <li>
                                    <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.props.changePage('userList')}><i className="nc-icon nc-circle-09"></i>Usuarios</div>
                                </li>
                                <li>
                                    <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.props.changePage('productList')}><i className="nc-icon nc-notes"></i>Productos</div>
                                </li>
                                <li>
                                    <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.props.changePage('turnosAdmin')}><i className="nc-icon nc-circle-09"></i>Turnos</div>
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