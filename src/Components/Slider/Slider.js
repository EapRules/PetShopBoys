import React, { Component } from 'react';
// import style from '../Slider/Slider.scss';
import image1 from '../../images/Slider-images/petshop.png'
import image2 from '../../images/Slider-images/consultas.png'
import image3 from '../../images/Slider-images/internacion.png'
import image4 from '../../images/Slider-images/emergencias.png'

class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Petshop</h3>
                                <p>Ponemos a tu alcance todo lo que tu fiel amigo necesita</p>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Consultas</h3>
                                <p>Realice sus consultas online</p>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Internacion/Cirugia</h3>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={image4} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <a href="http://localhost:3000">
                                <h3>Emergencias</h3>
                                <p>Llamá: 0800-234-2345</p>
                            </a>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Slider;