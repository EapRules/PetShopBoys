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
            startDate: new Date(),
            turnoMañana: [{ texto: "9:00 am", hour: "09:00" }, { texto: "9:30 pm", hour: "09:30" }, { texto: "10:00 pm", hour: "10:00" },
            { texto: "10:30 pm", hour: "10:30" }, { texto: "11:00 pm", hour: "11:00" }, { texto: "11:30 pm", hour: "11:30" }],
            turnoTarde: [{ texto: "6:00 pm", hour: "06:00" }, { texto: "6:30 pm", hour: "06:30" }, { texto: "7:00 pm", hour: "07:00" },
            { texto: "7:30 pm", hour: "07:30" }, { texto: "8:00 pm", hour: "08:00" }, { texto: "8:30 pm", hour: "08:30" }]
        }
    }
    componentDidMount() {
        let token = localStorage.getItem("token");
        this.setState({ isLoggedIn: token ? true : false });
        console.log(this.state.turnoMañana);

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
        this.getDataByday()
        console.log('====================================');
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
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="09:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9:30 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="09:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10:00 am</td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn-sm" name="hour" value="10:00" onClick={this.handleChange} >Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10:30 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="10:30" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11:00 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="11:00" onClick={this.handleChange}>Agendar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11:30 am</td>
                                            <td><button type="button" class="btn btn-primary btn-sm" name="hour" value="11:30" onClick={this.handleChange}>Agendar</button>
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
                                        {this.state.turnoTarde.map((item, i) => (
                                            <tr>

                                                <td>{item.texto}</td>
                                                <button type="button" class="btn btn-primary btn-sm m-1" name="hour" value={item.hour} onClick={this.handleChange}>Agendar</button>
                                            </tr>
                                        ))}

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
