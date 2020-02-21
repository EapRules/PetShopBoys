import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { BeatLoader } from "react-spinners";
import Loader from '../shared/Loader';

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			loading: false
		}
	}
	handleChange = obj => {
		let { name, value } = obj.target
		this.setState({ [name]: value })
	}
	onSubmit = async obj => {
		this.setState({ loading: true })
		if (obj) {
			obj.preventDefault();
		}
		fetch(
			"https://rolling-pet-shop.herokuapp.com/signup",
			// "http://192.168.10.60:4000/signup",
			{
				method: "POST",
				body: JSON.stringify(this.state),
				headers: { "Content-Type": "application/json" }
			}
		).then(res => res.json())
			.then(data => {
				this.setState({ loading: false })
				if (data.token) {
					Swal.fire({
						icon: 'success',
						title: `${data.message}`,
						showConfirmButton: false,
						timer: 1500
					})
				}
				else {
					Swal.fire({
						icon: 'error',
						title: `${data.message}`,
						showConfirmButton: false,
						timer: 1500
					})
				}
			})

	};
	render() {
		return (
			<div>
				<div className="sweet-loading">
					<BeatLoader
						css={Loader}
						size={30}
						color={"green"}
						loading={this.state.loading}
					/>
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
						<button type="submit" className="btn btn-success w-100 mt-4">Registrarse</button>
					</form>
				</div>
			</div>
		)
	}
}


