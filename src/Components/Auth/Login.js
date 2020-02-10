import React, { Component } from 'react'
import jwt from 'jsonwebtoken'
import closeAllModals from '../shared/CloseModals'
import Swal from 'sweetalert2'
import { BeatLoader } from "react-spinners";
import Loader from '../shared/Loader';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      loading: false
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
  handleChange = obj => {
    let { name, value } = obj.target;
    this.setState({ [name]: value });
  };

  onSubmit = obj => {
    this.setState({ loading: true })
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
        this.setState({ loading: false })
        if (data.token) {
          localStorage.setItem("token", data.token)
          Swal.fire({
            icon: 'success',
            title: `${data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
          this.setState({ message: data.mesagge })
        }
        if (localStorage.getItem('token')) {
          closeAllModals()

        } else {
          console.log('Error')
        }
      }
      )
      .catch(err => console.log('HAHA NOPE', err.message))

    //  document.getElementById('staticBackdrop').modal('toggle')
  };
  render() {
    return (
      <div>
        <BeatLoader
          css={Loader}
          size={30}
          color={"green"}
          loading={this.state.loading}
        />
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
      </div>
    );
  }
}