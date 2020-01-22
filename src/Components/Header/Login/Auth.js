import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Login from '../../Auth/Login'
import Register from '../../Auth/Register'

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
                <Register />
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
