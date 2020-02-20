import React, { Component } from 'react'
import '../CardConsulta/CardConsulta.scss'

export default class CardConsulta extends Component {


    render() {
        return (
            <div class="card col-md-4 col-lg-2 col-sm-12">
                <div class="card-body">
                    <h5 class="card-title">Juan Perez</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Mascota: Canino</h6>
                    <p class="card-text truncate font-weight-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-info btn-sm">Responder</button>
                </div>
            </div>
        )
    }
}
