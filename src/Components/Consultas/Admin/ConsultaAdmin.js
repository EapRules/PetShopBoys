import React, { Component } from 'react'
import '../Admin/ConsultaAdmin.scss'
import CardConsulta from './CardConsulta/CardConsulta'

export default class ConsultaAdmin extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Consultas</h2>
                <div className="row justify-content-around">
                    <CardConsulta></CardConsulta>
                    <CardConsulta></CardConsulta>
                    <CardConsulta></CardConsulta>
                </div>
            </div>
        )
    }
}

