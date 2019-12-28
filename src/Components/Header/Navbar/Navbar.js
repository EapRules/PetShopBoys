import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
    <img src="../../../images/logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
    PetShopBoys
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shops</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Trunos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>

    </ul>
  </div>
</nav>
      </div>
    )
  }
}
