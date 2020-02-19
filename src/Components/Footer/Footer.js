import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Footer extends Component {
  render() {
    return (
      <div>
        <hr/>
        <div className="   blue darken-2">


          <div className="container text-center text-md-left">


            <div className="row">


              <hr className="clearfix w-100 d-md-none" />


              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">


                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

                <ul className="list-unstyled ">
                  <li>
                    <p>
                      <Link className="" to="/" >Inicio</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                    <Link className="" to="/Tienda" >Tienda</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                    <Link className="" to="/Turnos" >Turno</Link>
                    </p>
                  </li>
                  <li>
                    <p>
                    <Link className="" to="/Consultas" >Consulta</Link>
                    </p>
                  </li>
                </ul>

              </div>



              <hr className="clearfix w-100 d-md-none" />


              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">


                <h5 className="font-weight-bold text-uppercase mb-4">Direccion</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-home mr-3"></i> Gral. Paz 576, San Miguel de Tucumán, Tucumán, Argentina</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> info@Petshops.com</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                  </li>
                </ul>

              </div>


              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-2 col-lg-2 text-center mx-auto my-4 column">

                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>


                <div className="d-flex justify-content-around">
                  <i className="fab fa-facebook-f"></i>



                  <i className="fab fa-twitter"></i>



                  <i className="fab fa-google-plus-g"></i>



                  <i className="fab fa-instagram"></i>
                </div>



              </div>


            </div>


          </div>

          <div className="footer-copyright text-center py-3 blue darken-3">© 2018 Copyright:
            <a className="" href="index.html"> PetShopBoys </a>
          </div>


        </div>
      </div>

    )
  }
}
