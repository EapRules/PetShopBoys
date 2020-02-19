import React, { Component } from 'react'
import Modal from './Modal/Modal'

export default class ProductList extends Component {
    render() {
        return (
            <div className="conteiner">
                <div className="text-center">
                    <h1>
                        Productos
                    </h1>

                </div>
                <div className=" d-flex justify-content-end">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0dc2852fbb1a238c3e995ce249e8a3d616a2edda
                
                    <Modal/>
                </div>
                <div className="contenedor-lista">
                    <div className=" m-5">
<<<<<<< HEAD
                    <table class="table table-dark">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Precio</th>
                            <th scope="col">imagen</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><img src="https://st4.depositphotos.com/12985848/20432/i/450/depositphotos_204322410-stock-photo-two-veterinarians-making-injection-pug.jpg" width="200px" height="80px" /></td>
                            <button type="button"  className="btn btn-success m-4">Publicar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button>
=======
                    <button type="button" className="btn btn-success m-4">Success</button>
                </div>
                <div className="contenedor-lista">
                    <div className=" m-5">
=======
>>>>>>> 0dc2852fbb1a238c3e995ce249e8a3d616a2edda
                        <table className="table table-dark">
                            <thead className="text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">image</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><img alt='text wachin' src="https://st4.depositphotos.com/12985848/20432/i/450/depositphotos_204322410-stock-photo-two-veterinarians-making-injection-pug.jpg" width="200px" height="80px" /></td>
                                    <button type="button" className="btn btn-success m-4">Publicar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>
<<<<<<< HEAD
>>>>>>> 7faa441c178772a3bcfdf7a2494cbf546f38b475
=======
>>>>>>> 0dc2852fbb1a238c3e995ce249e8a3d616a2edda

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
                                    <button type="button" className="btn btn-danger">Eliminar</button>

                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        )
    }
}
