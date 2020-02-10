import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Auth';
import Logo192 from '../../../images/logo192.png'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('token')
    this.setState({ isLoggedIn: token ? true : false })
  }
  logOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload()
  }
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
                <Link to='/tienda' className="nav-link">Tienda</Link>
              </li>
              <li className="nav-item">
                <Link to='/turnos' className="nav-link">Turno!</Link>
              </li>
              <li className="nav-item">
                <Link exact to="/consultas" className="nav-link" href="#">Consulta</Link>
              </li>
              <li className="nav-item">
                {
                  this.state.isLoggedIn
                    ? <div className="btn-group dropleft">
                      <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user-circle"></i>  Perfil
                    </button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" data-toggle="modal" data-target="#Profile">
                          Perfil
                        </button>
                        <button className='dropdown-item' onClick={this.logOut}>Cerrar Sesion</button>
                      </div>
                    </div>
                    : <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#staticBackdrop">
                      <i className="fas fa-user-circle"></i> Ingresar
                </button>}
              </li>
            </ul>
          </div>
        </nav>
        <Profile></Profile>
        <Login></Login>
      </div>
    )
  }
}
