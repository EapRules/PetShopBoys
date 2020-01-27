import React, { Component } from 'react';
import style from '../Consultas/Consultas.scss';

export default class Consultas extends Component {
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

                <form className="py-5">

                    <h2 className="text-center">Sus datos personales</h2>
                    <div class="row py-1 justify-content-around md-form">
                        <div class="col-5">
                            <input type="text" class="form-control input-consulta" placeholder="Nombre" />
                        </div>
                        <div class="col-5">
                            <input type="text" class="form-control input-consulta" placeholder="Apellido" />
                        </div>
                    </div>
                    <div class="row py-3 justify-content-around">
                        <div class="col-5">
                            <input type="email" class="form-control input-consulta" placeholder="Email" />
                        </div>
                        <div class="col-5">
                            <input type="text" class="form-control input-consulta" placeholder="Telefono" />
                        </div>
                    </div>
                    <h2 className="text-center mt-3">Sobre su Mascota</h2>
                    <div class="row py-3 justify-content-around">
                        <div class="form-group col-md-5">
                            <label>Especie</label>
                            <select class="form-control">
                                <option selected>Canino</option>
                                <option>Felino</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <label>Sexo</label>
                            <select class="form-control">
                                <option selected>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                        <div class="col-5">
                            <input type="text" class="form-control input-consulta" placeholder="Raza de la mascota" />
                        </div>
                        <div class="col-5">
                            <input type="text" class="form-control input-consulta" placeholder="Nombre de la mascota" />
                        </div>
                        <div class="form-group my-5">
                            <label>Escriba su consulta aquí</label>
                            <textarea class="form-control textarea-consulta" rows="5"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
