import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { BeatLoader } from "react-spinners";
import Loader from '../shared/Loader';
import moment from 'moment'
export default class Turnos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hour: '',
            day: '',
            description: '',
            ownerName: '',
            petName: '',
            date: '',
            DataTurnos: [],
            loading: false,
            newDispdias: []
        }
    }
    defaultTurns = ["09:00", "09:30", "10:00", "10:00", "10:30", "11:00", "11:30"];
    default = [{ hour: "09:00", avalible: true }, { hour: "09:30", avalible: true }, { hour: "10:00", avalible: true }, { hour: "10:30", avalible: true }, { hour: "11:00", avalible: true }, { hour: "11:30", avalible: true }]
    componentDidMount() {
        let token = localStorage.getItem("token");
        this.setState({ isLoggedIn: token ? true : false });

    }

    getTurnsByday() {

        let selectDate = this.state.day
        fetch(
            `https://rolling-pet-shop.herokuapp.com/turns?date=${selectDate}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
        ).then(res => res.json())
            .then(res => { this.listAvailable(res.result); this.componentDidMount() })
    }

    listAvailable(diasOcupados) {
        const horarios = [... this.defaultTurns]
        diasOcupados.map((item) => {
            const index = horarios.findIndex(horario => moment.utc(item.date).format('HH:mm') == horario)
            horarios.splice(index, 1)
        })
        this.setState({ newDispdias: horarios })

    }

    handleChange = obj => {
        let { name, value } = obj.target
        this.setState({ [name]: value })
        console.log(this.state);
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
                body: JSON.stringify(
                    {
                        ownerName: `${this.state.ownerName}`,
                        petName: `${this.state.petName}`,
                        date: `${this.state.day}T${this.state.hour}`,
                        description: `${this.state.description}`,
                    }
                ),
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
                title: `${moment.utc(res.date).format('[El] DD [de] MMMM, [a las] h:mm a')}`,
                text: `Turno creado con exito`,
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
        this.getTurnsByday()
        console.log('=====Turno creado para el dia=======');
        console.log(res.date);
        console.log('====================================');

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
                <h1 className="text-center m-5">Turnos</h1>
                <div className="row m-5">
                    <div className="col-lg-6 col-xs-12 text-center" >
                        <div>
                            <h2 className="text-center mb-5">Horarios preferencia</h2>
                        </div>
                        <label htmlFor="HastaDate">Fecha</label>
                        <div className="form-group text-center justify-content-center row">

                            <div className="col-lg-6 col-xs-6 " >
                                <input type="date" className="form-control text-center" name="day" value={this.state.day} onChange={this.handleChange}></input>

                            </div>
                            <div className="col-lg-3 col-xs-6 " >
                                <button type="button" onClick={() => this.getTurnsByday()} className='btn w-100 btn-primary'>Verificar disponibilidad</button>
                            </div>

                        </div>
                        <label htmlFor="HastaDate">Horario</label>
                        <div class="row justify-content-around">

                            <div className="col-lg-6 col-xs-12" >
                                <table className="table table-borderless table-sm table-white text-center">
                                    <thead class={this.state.newDispdias.length == 0 ? "table-warning" : "table-success"}>
                                        <tr >
                                            <th colspan="2"> {this.state.newDispdias.length == 0 ? "Sin Turnos" : "Turnos"} </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <h3>{this.state.newDispdias.length == 0 ? "Seleccione una fecha con turnos disponibles" : ""}</h3   >
                                        {console.log(this.state.newDispdias)}
                                        {this.state.newDispdias.map((item, i) => (
                                            <tr>
                                                <td>{item}</td>
                                                <button type="button" class="btn btn-primary btn-sm m-1" name="hour" value={item} onClick={this.handleChange}>Agendar</button>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12 ">

                        <form onSubmit={this.onSubmit}>
                            <h2 className="text-center mb-5">Datos cliente</h2>
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
                            <div className="form-row text-center justify-content-center">


                                <div>
                                    <div className="form-group textarea-turno">
                                        <label>Escriba su consulta aquí</label>
                                        <textarea name="message_html" className="form-control" name="description" onChange={this.handleChange} value={this.state.description} rows="9" cols="5" ></textarea>

                                    </div>
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
