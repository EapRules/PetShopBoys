import React, { Component } from 'react'

export default class Turnos extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center m-5">Turnos</h1>
                <div className="row m-5">
                    <div className="col-5">
                        <div>
                            <h2 className="text-center">  Calendario</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <h2 className="text-center">Horarios preferencia</h2>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Desde</label>
                                    <input type="email" className="form-control" id="inputEmail4"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Hasta</label>
                                    <input type="password" className="form-control" id="inputPassword4"></input>
                                </div>
                            </div>
                        </form>

                        <h2 className="text-center">Servicios</h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group ">
                                    <label htmlFor="inputState">Opciones</label>
                                    <select id="inputState" className="form-control">
                                        <option selected></option>
                                        <option>...</option>
                                    </select>
                                </div>

                            </div>

                            <div className="col-6">
                                <label htmlFor="inputEmail4">Lista de servicios</label>
                                <textarea class="form-control" id="message-text"></textarea>

                            </div>

                        </div>
                        <h2 className="text-center">Datos cliente</h2>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Nombre y Apellido</label>
                                    <input type="email" className="form-control" id="inputEmail4"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Telefono</label>
                                    <input type="password" className="form-control" id="inputPassword4"></input>
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4"></input>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="inputState">Forma de pago</label>
                                    <select id="inputState" className="form-control ">
                                        <option selected>Efectivo</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
