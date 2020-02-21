import React, { Component } from 'react'
import '../CardConsulta/CardConsulta.scss'

export default class CardConsulta extends Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {

        console.log(this.props.data);

    }

    render() {
        return (
            <div>


                <div class="card my-2">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{this.props.name} {this.props.lastname}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Mascota: {this.props.species}</h6>
                        <p class="card-text truncate font-weight-bold">{this.props.message}.</p>
                        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target={`#exampleModal${this.props.id}`}>Responder</button>
                    </div>
                </div>

                {/* <!-- Modal --> */}

                <div class="modal fade modal-consulta" id={`exampleModal${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Consultas de clientes</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <h2 className="col-12 text-center font-weight-bold">{this.props.name} {this.props.lastname}</h2>
                                </div>
                                <div className="row my-2">
                                    <p className="col-6 text-center"><strong>Email:</strong> {this.props.name}</p>
                                    <p className="col-6 text-center"><strong>Telefono:</strong> {this.props.phone}</p>
                                </div>
                                <hr class="my-4"></hr>
                                <div className="row mt-3 mb-2">
                                    <h3 className="col-12 text-center">Sobre la mascota</h3>
                                    <h4 className="col-12 text-center font-weight-bold">Nombre: {this.props.petName}</h4>
                                    <p className="col-4 text-center"><strong>Especie:</strong> {this.props.species}</p>
                                    <p className="col-4 text-center"><strong>Sexo:</strong> {this.props.sex}</p>
                                    <p className="col-4 text-center"><strong>Raza:</strong> {this.props.race}</p>
                                    <h4 className="col-12 text-center mt-3">Consulta</h4>
                                </div>
                                <div className="cont-consulta m-auto">
                                    <span className="col-12 text-left text-consulta">
                                        {this.props.message}
                                    </span>
                                </div>
                                {/* <hr class="my-4"></hr>
                                <div className="mt-2">

                                </div> */}


                            </div>
                            <div class="modal-footer modal-foot-consulta">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>

                                {/* <button type="button" class="btn btn-info">Enviar</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
