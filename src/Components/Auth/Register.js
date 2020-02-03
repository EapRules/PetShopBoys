import React, { Component } from 'react'
import Swal from 'sweetalert2'

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = obj => {
        let { name, value } = obj.target
        this.setState({ [name]: value })
    }
    onSubmit = async obj => {
        if (obj) {
            obj.preventDefault();
        }

        const response = await fetch(
            // "https://rolling-pet-shop.herokuapp.com/signup",
            "https://rolling-pet-shop.herokuapp.com/signup",
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: { "Content-Type": "application/json" }
            }
        );
        const res = await response.json();
        if (res.token) {
            localStorage.setItem("token", res.token)
            console.log(res.token)

            Swal.fire({
                icon: 'success',
                title: 'usuario creado exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: `${res.message}`,
                showConfirmButton: false,
                timer: 1500
            })

        }

    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Registro</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre de Usuario</label>
                    <input type="text" className="form-control" name='username' value={this.state.username} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="text" className="form-control" name='password' value={this.state.password} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success w-100 mt-4">Registrse</button>
            </form>

        )
    }
}


