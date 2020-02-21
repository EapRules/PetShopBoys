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
             console.log(response);
            })
    }


    render() {
        return (
            <div className="container-fluid">
                    {/* {this.state.contactAdmin.map(item => <p>{item.name}</p>)} */}
                <h1 className="text-center">Consultas</h1>
                <div className="row justify-content-around">

               

                {this.state.contactAdmin.map((item) => 
                
                <CardConsulta 
                name={item.name} 
                lastname={item.lastname}
                phone={item.phone}
                email={item.email} 
                species={item.species} 
                race={item.race}
                sex={item.sex}
                message={item.message}
                petName={item.petName}
                id={item._id}
                >
                </CardConsulta>
                
                )}

                
                    

               
                </div>
            </div>
        )
    }
}

