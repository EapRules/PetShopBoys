import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        pass: '',
        secret: ''
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
              <label for="exampleInputEmail1">Nombre</label>
              <input type="text" className="form-control"  name='name' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Apellido</label>
              <input type="text" className="form-control"  name='lastname' value={this.state.lastname} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="text" className="form-control"  name='email' value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Telefono</label>
              <input type="text" className="form-control"  name='phone' value={this.state.phone} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Pass</label>
              <input type="text" className="form-control" name='pass' value={this.state.pass} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label for="exampleInputPassword1">Secreto</label>
              <input type="text" className="form-control" placeholder="Ingrese su palabra secreto" name='secret' value={this.state.secret} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100 mt-4">Ingresar</button>
      </form>

  )
}
}
