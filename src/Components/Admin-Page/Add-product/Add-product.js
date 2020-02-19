import React, { Component } from 'react';

export default class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
            price: '',
            stock: '',
        }
    }


    onSubmit = (obj) => {
        obj.preventDefault();


    }

    handleChange = (obj) => {
        let { name, value } = obj.target
        this.setState({ [name]: value })
        // console.log(obj.target)
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Formulario Productos</h5>

                                <form id="form">
                                    <div className="row">
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="producto">Nombre del productoasdasdas</label>
                                            <input value={this.state.name} onChange={this.handleChange()} type="text" name="producto" className="form-control form-control" required placeholder="ingrese el producto"></input>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="descripcion">Descripcion del producto</label>
                                            <textarea value={this.state.description} onChange={this.handleChange()} type="text" name="descripcion" id="descripcion" className="form-control form-control" autoComplete="off" requiredplaceholder="ingrese la descripcion del producto"></textarea>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="precio">precio del producto</label>
                                            <input value={this.state.price} onChange={this.handleChange()} type="number" name="precio" id="precio" className="form-control form-control" autoComplete="off" requiredplaceholder="ingrese el precio"></input>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="stock">Stock del producto</label>
                                            <input value={this.state.stock} onChange={this.handleChange()} type="number" name="stock" id="stock" className="form-control form-control" autoComplete="off" requiredplaceholder="ingrese el stock"></input>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="imagen">Agregar Imagen</label>
                                        </div>
                                        <div className="form-group col-sm-10 text-center">
                                            <button type="submit" className="btn btn-primary btn-sm">Guardar</button>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}