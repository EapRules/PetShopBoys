import React, { Component } from 'react'
import styles from './Navbar.scss';
import Login from '../Login/Auth';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="alert alert-success text-center" role="alert">
          <p class="text-danger"> EMERGENCIAS - 0800-234-2345</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="../../../images/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
            PetShopBoys
  </a>
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
                <a className="nav-link" href="#">Consulta</a>
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
