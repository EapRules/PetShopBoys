import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { BeatLoader } from "react-spinners";
import Loader from '../shared/Loader';

export default class Turnos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ownerName: '',
            petName: '',
            date: '',
            loading: false
        }
    }
    componentDidMount() {
        let token = localStorage.getItem("token");
        this.setState({ isLoggedIn: token ? true : false })
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
        const response = await fetch(
            "https://rolling-pet-shop.herokuapp.com/turns",
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
        this.setState({ loading: false })
        if (!res.errors) {
            Swal.fire({
                icon: 'success',
                title: 'Turno creado Exitosamente',
                text: `${res.date}`,
                showConfirmButton: true
            })
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
            <div>
                <BeatLoader
                    css={Loader}
                    size={30}
                    color={"green"}
                    loading={this.state.loading}
                />
                <h1 className="text-center m-5 main-title">Turnos</h1>
                <div className="row m-5">
                    <div className="col-5">
                        <div>
                            <h2 className="text-center">  Calendario</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <h2 className="text-center">Horarios preferencia</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                {/* <div className="form-group col-md-6 disabled">
                                    <label htmlFor="DesdeDate">Desde</label>
                                    <input type="date" className="form-control disabled" name="DesdeDate" value={this.state.username} onChange={this.handleChange} ></input>
                                </div> */}
                                <div className="form-group col-md-12">
                                    <label htmlFor="HastaDate">Fecha</label>
                                    <input type="date" className="form-control" name="date" value={this.state.date} onChange={this.handleChange}></input>
                                </div>
                            </div>
                            {/*  
                        <h2 className="text-center">Servicios</h2>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group ">
                                    <label htmlFor="inputState">Opciones</label>
                                    <select name="inputState" className="form-control">
                                        <option selected></option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="message-text">Lista de servicios</label>
                                <textarea class="form-control" name="message-text"></textarea>
                            </div>
                        </div>
                        */}
                            <h2 className="text-center">Datos cliente</h2>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="textNombre">Nombre y Apellido</label>
                                    <input type="text" className="form-control" name="ownerName" value={this.state.ownerName} onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Nombre Mascota</label>
                                    <input type="text" className="form-control" name="petName" value={this.state.petName} onChange={this.handleChange}></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="Email">Telefono</label>
                                    <input type="tel" className="form-control" name="tel"></input>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="inputState">Forma de pago</label>
                                    <select name="inputState" className="form-control ">
                                        <option defaultValue>Efectivo</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>


                            <button type={this.state.isLoggedIn ? "submit" : "button"} className={this.state.isLoggedIn ? 'btn w-100 btn-success' : 'btn w-100 btn-danger'}>{this.state.isLoggedIn ? 'Solicitar Turno' : 'Debe iniciar sesion para Solicitar un Turno'}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
