import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      address: '',
      email: '',
      celphone: ''
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
      "http://192.168.1.114:4000/usuarios/signup/profile",
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
      alert("Datos guardados satisfactoriamente")
    }
    else {
      alert(res.message)
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
                  <input type="email" className="form-control" name='name' value={this.state.username} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Apellido</label>
                  <input type="text" className="form-control" name='lastname' value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Direccion</label>
                  <input type="text" className="form-control" name='address' value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input type="text" className="form-control" name='email' value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Telefono</label>
                  <input type="text" className="form-control" name='celphone' value={this.state.password} onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-success w-100 mt-4">Guardar</button>
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


