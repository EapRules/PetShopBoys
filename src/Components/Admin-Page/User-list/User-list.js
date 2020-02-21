import React, { Component } from 'react'
export default class UserList extends Component {

    constructor(p) {
        super(p)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://rolling-pet-shop.herokuapp.com/users/admin/users", {
            method: "GET",
            // body: JSON.stringify({ products: toBuy }),
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => res.json())
            .then(res => this.setState({ data: res })).catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>
                        Usuarios
                    </h1>
                </div>
                <div className="contenedor-tabla m-4" >
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre de usuario</th>
                                {/* <th scope="col">Apellido</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Email</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((a, i) =>
                                <tr>
                                    <th scope='row'>{i + 1}</th>
                                    <td>{a.username}</td>
                                    {/* <td>${a.price}</td> */}
                                    {/* <td>{a.stock}</td> */}
                                    {/* <td><img alt='text wachin' src={a.url} width="200px" height="80px" /></td> */}
                                </tr>)}
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}