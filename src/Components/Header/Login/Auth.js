import React, { Component } from 'react'

import Login from '../../Auth/Login'
import Register from '../../Auth/Register'

export default class Auth extends Component {
  render() {
    return (
      <div>

        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-target="#myModal" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content modal-xl">
              <div className="modal-footer">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body row justify-content-around">
                <Login />
                <Register />
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
