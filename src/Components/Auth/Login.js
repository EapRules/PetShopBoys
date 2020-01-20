import React, { Component, Fragment } from 'react'

export default class Login extends Component {
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

    onSubmit = obj => {
obj.preventDefault()
console.log(this.state)
}
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Dirección de correo</label>
                    <input type="email" className="form-control" placeholder="Ingrese su mail" name='username' value={this.state.username} onChange={this.handleChange} />
                    <small id="emailHelp" className="form-text text-muted">No la usaremos para enviarte spam. Lo prometemos! 🤞.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese su contraseña" name='password' value={this.state.password} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success w-100 mt-4">Ingresar</button>
            </form>

        )
    }
}
