import React, { Component } from 'react';

export default class AddProduct extends Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Formulario Productos</h5>

                                <form id= "form">
                                    <div className="row">
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="producto">Nombre del producto</label>
                                            <input type="text" name="producto" id="producto" 
                                            className="form-control form-control" 
                                            autoComplete="off" required placeholder="ingrese el producto"></input>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="descripcion">Descripcion del producto</label>
                                            <textarea type="text" name="descripcion" id="descripcion" 
                                            className="form-control form-control" 
                                            autoComplete="off" requiredplaceholder="ingrese la descripcion del producto"></textarea>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="precio">precio del producto</label>
                                            <input type="number" name="precio" id="precio" 
                                            className="form-control form-control" 
                                            autoComplete="off" requiredplaceholder="ingrese el precio"></input>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="stock">Stock del producto</label>
                                            <input type="number" name="stock" id="stock" 
                                            className="form-control form-control" 
                                            autoComplete="off" requiredplaceholder="ingrese el stock"></input>
                                        </div>
                                        <div className="form-group col-sm-10">
                                            <label htmlFor="imagen">Agregar Imagen</label>                        
                                        </div>
                                        <div className="form-group col-sm-10 text-center">
                                            <button type="submit" className="btn btn-primary btn-sm">
                                                Guardar</button>
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