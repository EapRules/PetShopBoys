import React, { Component } from 'react'
// import $ from 'jquery'
import jwt from 'jsonwebtoken'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    const localToken = localStorage.getItem('token') || null
    if (localToken) {
      this.onSubmit();
      const decoded = jwt.decode(localToken);
      decoded.isAdmin ? console.log("Se logueó un Admin") : console.log("Se logueó un pleb");
    }
  }

  closeAllModals = () => {


    // $("#myModal").modal("hide");


    // get modals
    const modals = document.getElementsByClassName('modal');

    // on every modal change state like in hidden modal
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove('show');
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }

    // get modal backdrops
    const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

    // remove every modal backdrop
    for (let i = 0; i < modalsBackdrops.length; i++) {
      document.body.removeChild(modalsBackdrops[i]);
    }
  }

  handleChange = obj => {
    let { name, value } = obj.target;
    this.setState({ [name]: value });
  };

  onSubmit = async obj => {
    if (obj) {
      obj.preventDefault();
    }

    const response = await fetch(
      "http://192.168.10.210:4000/signin",
      {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: { "Content-Type": "application/json" }
      }
    );
    const res = await response.json();
    if (res.token) {
      localStorage.setItem("token", res.token)
      this.closeAllModals()
    }
    //  document.getElementById('staticBackdrop').modal('toggle')
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Dirección de correo
                         </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su mail"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            No la usaremos para enviarte spam. Lo prometemos! 🤞.
                         </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 mt-4"
        >
          Logeo
                       </button>
      </form>
    );
  }
}