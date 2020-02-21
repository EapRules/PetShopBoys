import React, { Component } from 'react'
import Modal from './Modal/Modal'

export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://rolling-pet-shop.herokuapp.com/products", {
            method: "GET",
            // body: JSON.stringify({ products: toBuy }),
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
        }).then(res => res.json()).then(res => { this.setState({ data: res.result }); console.log(res) })
    }
    render() {
        return (
            <div className="conteiner">
                <div className="text-center"><h1>Productos</h1></div>
                <div className=" d-flex justify-content-end">
                    <Modal />
                </div>
                <div className="contenedor-lista">
                    <div className=" m-5">
                        <table className="table table-dark">
                            <thead className="text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Imágen</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">

                                {this.state.data.map((a, i) =>
                                    <tr>
                                        <th scope='row'>{i + 1}</th>
                                        <td>{a.name}</td>
                                        <td>${a.price}</td>
                                        <td>{a.stock}</td>
                                        <td><img alt='text wachin' src={a.url} width="200px" height="80px" /></td>
                                    </tr>)}
                                {/* 
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><img alt='text wachin' src="https://st4.depositphotos.com/12985848/20432/i/450/depositphotos_204322410-stock-photo-two-veterinarians-making-injection-pug.jpg" width="200px" height="80px" /></td>
                                    <button type="button" className="btn btn-success m-4">Publicar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><img alt='text wachin' src="https://st4.depositphotos.com/12985848/20432/i/450/depositphotos_204322410-stock-photo-two-veterinarians-making-injection-pug.jpg" width="200px" height="80px" /></td>
                                    <button type="button" className="btn btn-success m-4">Publicar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td><img alt='text wachin' src="https://st4.depositphotos.com/12985848/20432/i/450/depositphotos_204322410-stock-photo-two-veterinarians-making-injection-pug.jpg" width="200px" height="80px" /></td>
                                    <button type="button" className="btn btn-success m-4">Publicar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button> */}

                                {/* </tr> */}
                            </tbody>
                        </table>

                    </div>

                </div>
            </div >
        )
    }
}
