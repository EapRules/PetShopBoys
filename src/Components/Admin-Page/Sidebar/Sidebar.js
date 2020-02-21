import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Sidebar extends Component {
    render() {
        return (
            <div className="container">
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
<<<<<<< HEAD
                                    <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.props.changePage('consultaAdmin')}><i className="nc-icon nc-notes"></i>Consultas</div>
=======
                                    <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => this.props.changePage('turnosAdmin')}><i className="nc-icon nc-circle-09"></i>Turnos</div>
>>>>>>> e76c4f38d5e47825fbfce6a0469740a90a571a63
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