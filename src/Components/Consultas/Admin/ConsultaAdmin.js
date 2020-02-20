import React, { Component } from 'react'
import '../Admin/ConsultaAdmin.scss'
import CardConsulta from './CardConsulta/CardConsulta'

export default class ConsultaAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactAdmin: []
        }
    }


    componentDidMount() {
        fetch('https://rolling-pet-shop.herokuapp.com/contact', {
            method: "GET",
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then(response =>  response.json() )
            .then(response => { this.setState({ contactAdmin: response });
                // console.log(response);
            })
    }


    render() {
        return (
            <div className="container">
                    {this.state.contactAdmin.map(item => <p>{item.name}</p>)}
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

