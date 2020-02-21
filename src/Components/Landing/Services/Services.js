import React, { Component } from 'react';
import imagen1 from '../../../images/Services-img/imagen1.jpg'
import imagen3 from '../../../images/Services-img/imagen3.jpg'
import imagen4 from '../../../images/Services-img/imagen4.jpg'
import imagen5 from '../../../images/Services-img/imagen5.jpg'
import imagen6 from '../../../images/Services-img/imagen6.jpg'
import imagen7 from '../../../images/Services-img/imagen7.jpg'


class Services extends Component {
    render() {
        return (

            <div className="box-2 my-5 mx-5">

                <h1 id="services" className="font-weight-bold my-3 text-center">Nuestros Servicios</h1>
                <div className="row">

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div className="card text-center shadow rounded">
                            <img src={imagen3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">Consulta</h4>
                                <p className="card-text">En nuestra veerinaria Ofrecemos consultas e informacion para tener un mejor cuidado de su mascota</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Saber+
                                </button>
                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenterTitle">Consulta</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div className="card text-center shadow rounded">
                            <img src={imagen7} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">Estetica</h4>
                                <p className="card-text">En nuestra estetica disponemos de variedad de servicios</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1">
                                    Saber+
                                </button>
                                <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenter1Title">Estetica</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div className="card text-center shadow rounded">
                            <img src={imagen6} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">Cirugia</h4>
                                <p className="card-text">en nuestra clinica veterinaria contamos con servicios de cirugia</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter2">
                                    Saber+
                                </button>
                                <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenter2Title2">Cirugia</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center  p-3">
                        <div className="card text-center shadow rounded">
                            <img src={imagen5} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">Internacion</h4>
                                <p className="card-text">Contamos con servicio de internacion, control y monitoreo</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter3">
                                    Saber+
                                </button>
                                <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenter3Title3">Internacion</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div className="card text-center shadow rounded">
                            <img src={imagen1} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">Vacunacion</h4>
                                <p className="card-text">Ofrecemos un plan completo de vacunacion con su calendario</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter4">
                                    Saber+
                                </button>
                                <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenter4Title4">Vacunacion</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center  p-3">
                        <div className="card text-center shadow rounded">
                            <img src={imagen4} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h4 className="card-title">Radiografia</h4>
                                <p className="card-text">En nuestra clinica contamos con equipos para radiografia</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter5">
                                    Saber+
                                </button>
                                <div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenter5Title5">Radiografia</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;