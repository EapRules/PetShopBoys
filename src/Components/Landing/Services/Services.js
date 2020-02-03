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

            <div className="box-2 my-4 mx-5">

                <h1 id="services">Our services</h1>
                <div className="row">

                    <div className="col-lg-4 col-sm-12 text-center p-3">

                        <div className="card text-center" style={{ width: '18rem' }}>
                            <img src={imagen3} class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Consulta</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Saber +</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div className="card text-center" style={{ width: '18rem' }}>
                            <img src={imagen7} class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Estetica</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Saber +</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div class="card text-center" style={{ width: '18rem' }}>
                            <img src={imagen6} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Cirugia</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Saber +</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div class="card text-center" style={{ width: '18rem' }}>
                            <img src={imagen5} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Internacion</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Saber +</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div class="card text-center" style={{ width: '18rem' }}>
                            <img src={imagen1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Vacunacion</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Saber +</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 text-center p-3">
                        <div class="card text-center" style={{ width: '18rem' }}>
                            <img src={imagen4} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Radiografia</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Saber +</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Services;