import React, { Component } from 'react'
// import $ from 'jquery'
import jwt from 'jsonwebtoken'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
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

    if (localStorage.getItem('token')) {

      const modals = document.getElementsByClassName('modal');
      const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

      for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('show');
        document.body.classList.remove('modal-open')
        modals[i].setAttribute('aria-hidden', 'true');
        modals[i].setAttribute('style', 'display: none');
      }


      for (let i = 0; i < modalsBackdrops.length; i++) {
        document.body.removeChild(modalsBackdrops[i]);
        window.location.reload()
      }
    } else {
      console.log('Error')
    }
  }


  handleChange = obj => {
    let { name, value } = obj.target;
    this.setState({ [name]: value });
  };

  onSubmit = obj => {
    if (obj) {
      obj.preventDefault();
    }

    fetch(
      // "https://rolling-pet-shop.herokuapp.com/signin",
      "https://rolling-pet-shop.herokuapp.com/signin",
      { method: "POST", body: JSON.stringify(this.state), headers: { "Content-Type": "application/json" } })
      .then(res => (res.json()))
      .then(data => {
        console.log(data);
        data.token ? localStorage.setItem("token", data.token) : this.setState({ message: data.mesagge })
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
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Nombre de Usuario
                         </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        {this.state.message ? <small id="emailHelp" className="form-text text-danger"> {this.state.message}. </small> : null}
        <button
          type="submit"
          className="btn btn-success w-100 mt-4"
        >Iniciar sesión</button>
      </form>
    );
  }
}