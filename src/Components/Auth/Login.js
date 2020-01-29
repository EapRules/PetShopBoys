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
    // const localToken = localStorage.getItem('token') || null
    // if (localToken) {
    // this.onSubmit();
    // const decoded = jwt.decode(localToken);
    // decoded.isAdmin ? console.log("Se logueó un Admin") : console.log("Se logueó un pleb");
    // }
  }

  closeAllModals = () => {

    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove('show');
      document.body.classList.remove('modal-open')
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }
    const modalsBackdrops = document.getElementsByClassName('modal-backdrop');
    for (let i = 0; i < modalsBackdrops.length; i++) {
      document.body.removeChild(modalsBackdrops[i]);
    }

    window.location.reload()
  }
  handleChange = obj => {
    let { name, value } = obj.target;
    this.setState({ [name]: value });
  };

  onSubmit = obj => {
    if (obj) {
      obj.preventDefault();
    }

    fetch("https://rolling-pet-shop.herokuapp.com/signin", { method: "POST", body: JSON.stringify(this.state), headers: { "Content-Type": "application/json" } })
      .then(res => (res.json()))
      .then(data => {
        console.log(data);
        localStorage.setItem("token", data.token);
        this.closeAllModals()
        // window.location.reload()
      }
      )
      .catch(err => console.log('HAHA NOPE', err.message))

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
            No la usaremos para enviarte spam. Lo prometemos! <span role='img' aria-label='Vamos a volver'>🤞</span>.
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
          Registro
                       </button>
      </form>
    );
  }
}