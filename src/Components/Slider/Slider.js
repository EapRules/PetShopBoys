import React, { Component } from 'react';
import '../Slider/Slider.scss';
import image1 from '../../images/Slider-images/petshop.png'
import image2 from '../../images/Slider-images/consultas.png'
import image3 from '../../images/Slider-images/internacion.png'
import image4 from '../../images/Slider-images/emergencias.png'

class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Petshop</h3>
                                <p>Ponemos a tu alcance todo lo que tu fiel amigo necesita</p>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Consultas</h3>
                                <p>Realice sus consultas online</p>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Internacion/Cirugia</h3>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Emergencias</h3>
                                <p>Llamá: 0800-234-2345</p>
                            </a>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Slider;