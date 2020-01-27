import React, { Component } from 'react'
import styles from './Navbar.scss';
import Login from '../Login/Auth';
import Logo192 from '../../../images/logo192.png'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="alert alert-success text-center" role="alert">
          <p class="text-danger"><strong>EMERGENCIAS - 0800-234-2345</strong></p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link exact to="/" className="navbar-brand" href="#">
            <img src= {Logo192} width="30" height="30" className="d-inline-block align-top" alt="" /><strong>  PetShopBoys</strong></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Tienda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Turno</a>
              </li>
              <li className="nav-item">
                <Link exact to="/consultas" className="nav-link" href="#">Consulta</Link>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#staticBackdrop">
               <i class="fas fa-user-circle"></i> Ingresar 
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Login></Login>
      </div>
    )
  }
}
