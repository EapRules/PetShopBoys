import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import '../Cliente/Consultas.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Link } from 'react-router-dom';

export default class Consultas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // "user_id": "leomoyano7@gmail.com",
            "name": "",
            "lastname": "",
            "email": "",
            "phone": "",
            "petName": "",
            "species": "",
            "race": "",
            "sex": "",
            "message": ""
        }
    }

    //Función HandleInputChange para seguir los cambios en los campos y actualizar el estado cuando el usuario ingresa o cambia algo.
    handleInputChange(event) {
        event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({ [name]: value })

        console.log(this.state);

    }

    onSubmit = async obj => {
        this.setState({ loading: true })
        if (obj) {
            obj.preventDefault();
        }
        fetch(
            "https://rolling-pet-shop.herokuapp.com/contact",
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: { "Content-Type": "application/json" }
            }
        ).then(res => res.json())
            .then(data => {
                this.setState({ loading: false })
                if (data.result) {
                    console.log('Todo bien!');

                } else {
                    Swal.fire({
                        icon: 'success',
                        title: `¡La consulta fue enviada exitosamente!`,
                        showConfirmButton: true,
                        focusConfirm: false,
                        // timer: 1500,
                        confirmButtonText:
                            // '<a href="http://localhost:3000/" className="text-light btn-inicio">Volver al inicio</a>'
                           '<p><a href="http://localhost:3000/" class="text-light mb-0">Volver al Inicio</a></p>'
                    })
                }
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: `No se pudo enviar el correo :(`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    };

    //Función sentMessage: lugar donde implementamos el codigo del servicio EmailJS y enviamos correos.
    sentMessage(event) {
        event.preventDefault()

        // let obj = {
        //     "user_id": 'leomoyano7@gmail.com',
        //     "name": this.state.name,
        //     "lastname": this.state.lastname,
        //     "email": this.state.email,
        //     "phone": this.state.phone,
        //     "pet_name": this.state.pet_name,
        //     "species": this.state.species,
        //     "race": this.state.race,
        //     "sex": this.state.sex,
        //     "message_html": this.state.message_html
        // }

        const limpiarFormulario = function () {
            document.getElementById('consulta-form').getElementsByClassName("form-control").reset();
        }




        // const service_id = "gmail";
        // const template_id = "vet_shop";
        // let user_id = "user_Nmod0HqZC8hWaM1GNTMOl";

        // emailjs.send(service_id, template_id, templateParams, user_id).then(function (response) {
        //     if (response.ok) {
        //         console.log('Todo bien!');

        //     } else {
        //         Swal.fire({
        //             icon: 'success',
        //             title: `¡La consulta fue enviada exitosamente!`,
        //             showConfirmButton: true,
        //             focusConfirm: false,
        //             // timer: 1500,
        //             confirmButtonText:
        //                 '<a href="http://localhost:3000/" className="text-light btn-inicio">Volver al inicio</a>'
        //         })
        //         // document.getElementById('consulta-form').getElementsByClassName("form-control").reset();
        //     }
        // })
        // .catch(function (error) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: `No se pudo enviar el correo :(`,
        //         showConfirmButton: false,
        //         timer: 1500
        //     })
        // });
    }


    render() {
        return (
            <div className="container">
                <h1 className="text-center main-title">Consulta</h1>
                <div className="contenedor-aclaraciones my-4 p-2">
                    <span>Consultas veterinarias:</span>
                    <p>
                        En esta sección podemos atender sus consultas sobre el cuidado de sus mascotas, perros y gatos. Si desea realizar una pregunta relacionada con la salud, alimentación o bienestar de sus mascotas, complete el formulario con todos sus datos y le enviaremos una respuesta lo más rápido posible.
                        Al completar el siguiente formulario usted está de acuerdo con las condiciones de este servicio.
                 </p>
                </div>
                <div className="contenedor-aclaraciones my-3 p-2">
                    <div className="text-center">
                        <span>Aclaración</span>
                    </div>
                    <p>
                        Las respuestas desde <b>PetShopBoys</b>, <b>NO</b> suplantan la <b>consulta</b> y el <b>tratamiento</b> personalizado con su Médico Veterinario de cabecera y tampoco pueden tomarse como una indicación terapéutica.
                        Este servicio <b>no está orientado a indicar medicamentos ni dosis</b>, porque es un acto privado y exclusivo de su Médico Veterinario de cabecera.
                        Las respuestas de nuestros consultores son solo emitidas con fines de orientación para que Ud. pueda acceder a opiniones especializadas.
                 </p>
                </div>

                <form id="consulta-form" onSubmit={this.onSubmit} className="py-5">
                    {/* 
                              name={this.props.name} 
                method={this.props.method}  
                action={this.props.action} 
                 > */}

                    <h2 className="text-center font-weight-bold">Sus datos personales</h2>
                    <div class="row py-1 justify-content-around md-form">
                        <div class="col-5">
                            <input type="text" name="name" class="form-control input-consulta" placeholder="Nombre" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.name} />
                        </div>
                        <div class="col-5">
                            <input type="text" name="lastname" class="form-control input-consulta" placeholder="Apellido" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.lastname} />
                        </div>
                    </div>
                    <div class="row py-3 justify-content-around">
                        <div class="col-5">
                            <input type="email" name="email" class="form-control input-consulta" placeholder="Email" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.email} />
                        </div>
                        <div class="col-5">
                            <input type="number" name="phone" class="form-control input-consulta" placeholder="Telefono" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.phone} />
                        </div>
                    </div>
                    <h2 className="text-center mt-3 font-weight-bold">Sobre su Mascota</h2>
                    <div class="row py-3 justify-content-around">
                        <div class="form-group col-md-5">
                            <label>Especies</label>
                            <select class="form-control" name="species" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.species}>
                                <option selected>Elegir...</option>
                                <option value="Canino">Canino</option>
                                <option value="Felino">Felino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                            <label>Sexo</label>
                            <select className="form-control" name="sex" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.sex}>
                                <option selected>Elegir...</option>
                                <option value="Macho">Macho</option>
                                <option value="Hembra">Hembra</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <input type="text" name="race" className="form-control input-consulta" placeholder="Raza de la mascota" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.race} />
                        </div>
                        <div className="col-5">
                            <input type="text" name="petName" className="form-control input-consulta" placeholder="Nombre de la mascota" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.petName} />
                        </div>
                        <div className="form-group my-5">
                            <label>Escriba su consulta aquí</label>
                            <textarea name="message" className="form-control textarea-consulta" rows="5" required="required" onChange={this.handleInputChange.bind(this)} value={this.state.message}></textarea>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-info" >Enviar Consulta</button>
                    </div>
                </form>

            </div>
        )
    }
}
