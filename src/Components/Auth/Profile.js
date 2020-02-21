import React, { Component } from 'react'
import Swal from 'sweetalert2'
import closeAllModals from '../shared/CloseModals'

export default class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			saveData: [],
			name: '',
			lastname: '',
			address: '',
			email: '',
			celphone: ''
		}
	}
	componentDidMount() {
		this.getDatafromAccount()
	}

	getDatafromAccount() {
		fetch(
			`https://rolling-pet-shop.herokuapp.com/profiles`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"authorization": `Bearer ${localStorage.getItem("token")}`
				}
			}
		).then(res => res.json())
			.then(res => {
				this.setState({ saveData: res })
				console.log('====================================');
				console.log(res);
				console.log('====================================');
			})
	}

	handleChange = obj => {
		let { name, value } = obj.target
		this.setState({ [name]: value })
	}
	onSubmit = async obj => {
		this.getDatafromAccount()
		if (obj) {
			obj.preventDefault();
		}
		const response = await fetch(
			"https://rolling-pet-shop.herokuapp.com/profiles/signup",
			{
				method: "POST",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type": "application/json",
					"authorization": `Bearer ${localStorage.getItem("token")}`
				}
			}
		);

		const res = await response.json();

		if (!res.errors) {
			Swal.fire({
				icon: 'success',
				title: `${res.message}`,
				showConfirmButton: false,
				timer: 1500
			})
			// closeAllModals();
		}
		else {
			Swal.fire({
				icon: 'error',
				title: `Complete todos los campos`,
				showConfirmButton: false,
				timer: 1500
			})
		}
	};
	render() {
		return (
			<div className="modal fade" id="Profile" data-backdrop="static" data-target="#myModal" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog " role="document">
					<div className="modal-content modal-xl">
						<div className="modal-footer">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body row justify-content-around">
							<form onSubmit={this.onSubmit}>
								<h2>Datos Personales</h2>
								<div className="form-group mt-5">
									<label htmlFor="exampleInputEmail1">Nombre</label>
									{this.state.saveData ? <input type="text" className="form-control-complete" name='name' disabled placeholder={this.state.saveData.name} /> : <input type="text" className="form-control" name='name' value={this.state.username} onChange={this.handleChange} />}
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Apellido</label>
									{this.state.saveData ? <input type="text" className="form-control-complete" name='name' disabled placeholder={this.state.saveData.lastname} /> : <input type="text" className="form-control-complete" name='lastname' value={this.state.password} onChange={this.handleChange} />}
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Direccion</label>

									{this.state.saveData ? <input type="text" className="form-control-complete" name='name' disabled placeholder={this.state.saveData.address} /> : <input type="text" className="form-control" name='address' value={this.state.password} onChange={this.handleChange} />}
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Email</label>
									{this.state.saveData ? <input type="text" className="form-control-complete" name='name' disabled placeholder={this.state.saveData.email} /> : <input type="email" className="form-control" name='email' value={this.state.password} onChange={this.handleChange} />}
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Telefono</label>
									{this.state.saveData ? <input type="text" className="form-control-complete" name='name' disabled placeholder={this.state.saveData.celphone} /> : <input type="number" className="form-control" name='celphone' value={this.state.celphone} onChange={this.handleChange} />}

								</div>
								{this.state.saveData ? <button data-dismiss="modal" className="btn btn-warning w-100 mt-4">Cerrar</button> : <button type="submit" className="btn btn-success w-100 mt-4">Guardar</button>}

							</form>
						</div>
						<div className="modal-footer">
						</div>
					</div>
				</div>
			</div>
		)
	}
}


