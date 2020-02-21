import React, { Component } from 'react'
export default class UserList extends Component {

    componentDidMount() {
        fetch("https://rolling-pet-shop.herokuapp.com/users/admin/users", {
            method: "POST",
            // body: JSON.stringify({ products: toBuy }),
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            // .then(res => res.json())
            .then(res => console.log(res)).catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>
                        Usuarios
                    </h1>
                </div>
                <div className="contenedor-tabla m-4">
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">nombre</th>
                                <th scope="col">apellido</th>
                                <th scope="col">telefono</th>
                                <th scope="col">email</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>enzo</td>
                                <td>politti</td>
                                <td>381-1223133</td>
                                <td>enzopilitti@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>lucas</td>
                                <td>salvatierra</td>
                                <td>381-23445433</td>
                                <td>lucassalvatierra@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>leo</td>
                                <td>moyano</td>
                                <td>381-56697980</td>
                                <td>leomoyano@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>lediegue</td>
                                <td>rolling</td>
                                <td>381-22345644</td>
                                <td>ledieguerolling@mdo</td>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}