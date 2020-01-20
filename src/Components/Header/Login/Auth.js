import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Login from '../../Auth/Login'

export default class Auth extends Component {
  render() {
    return (
      <div>

        <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content modal-xl">
            <div class="modal-footer">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
              </div>
              <div class="modal-body row justify-content-around">
<Login />
                {/* <div class="m-5">
                  <p class="font-weight-bold text-center">LOGIN</p>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">   <i class="fas fa-user"></i> </span>
                    </div>
                    <input type="text" class="form-control" placeholder="User / Email" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary btn-sm">Ingresar</button>
                  </div>
                </div> */}
                <div >
                  <p class="font-weight-bold text-center">REGISTRO</p>
                  <div class="input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1" />
                  </div>
                  <div class="input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1" />
                  </div>
                  <div class="input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                  </div>
                  <div class="input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="Telefono" aria-label="Telefono" aria-describedby="basic-addon1" />
                  </div>
                  <div class="input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon1" />
                  </div>
                  <div class="input-group-sm mb-3">
                    <input type="text" class="form-control" placeholder="Preguna secreta" aria-label="Pregunta" aria-describedby="basic-addon1" />
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary btn-sm">Registrarse</button>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
