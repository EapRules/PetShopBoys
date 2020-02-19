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
            ownerName: '',
            petName: '',
            date: '',
            DataTurnos: [],
            loading: false,
            startDate: new Date()
        }
    }
    componentDidMount() {
        let token = localStorage.getItem("token");
        this.setState({ isLoggedIn: token ? true : false });

    }

    getDataByday() {
        let selectDate = this.state.day
        fetch(
            `https://rolling-pet-shop.herokuapp.com/turns?date=${selectDate}`,
            {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
        ).then(res => res.json())
            .then(res => this.setState({ DataTurnos: res.result }))
    }
    handleChange = obj => {
        this.getDataByday()
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
                        date: `${this.state.day}T${this.state.hour}`
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
                title: `${moment(res.date).format('[El] DD [de] MMMM, [a las] h:mm a')}`,
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
        this.getDataByday()
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
                            <h2 className="text-center">Horarios preferencia</h2>
                        </div>
                        <div className="form-group text-center">
                            <label htmlFor="HastaDate">Fecha</label>
                            <input type="date" className="form-control text-center" name="day" value={this.state.day} onChange={this.handleChange}></input>
                        </div>
                        <label htmlFor="HastaDate">Horario</label>
                        <div class="row justify-content-around">

                            <div className="col-lg-6 col-xs-12" >
                                <table className="table table-borderless table-sm table-white text-center">
                                    <thead class="table-success">
                                        <tr >
                                            <th colspan="2">Turnos mañana</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.state.DataTurnos.map((item, i) => (
                                        <tr>
                                            <th key={i}>{i}</th>
                                            <td>{item.petName}</td>
                                            <td>{item.ownerName}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    ))} */}
                                        <tr>
                                            <td >9:00 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="12:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9:30 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="12:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10:00 am</td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm" name="hour" value="13:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10:30 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="13:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11:00 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="14:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11:30 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="14:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6 col-xs-12" >
                                <table className="table table-borderless table-sm table-white text-center">
                                    <thead class="table-success">
                                        <tr >
                                            <th colspan="2">Turnos tarde</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.state.DataTurnos.map((item, i) => (
                                        <tr>
                                            <th key={i}>{i}</th>
                                            <td>{item.petName}</td>
                                            <td>{item.ownerName}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    ))} */}
                                        <tr>
                                            <td>6:00 pm</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="21:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6:30 pm</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="21:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7:00 pm</td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm" name="hour" value="22:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7:30 pm</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="22:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8:00 pm</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="23:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8:30 pm</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="23:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12 ">

                        <form onSubmit={this.onSubmit}>
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
                            <div className="form-row text-center justify-content-center">


                                <div>
                                    <div className="form-group textarea-turno">
                                        <label>Escriba su consulta aquí</label>
                                        <textarea name="message_html" className="form-control" rows="9" cols="5" ></textarea>

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
