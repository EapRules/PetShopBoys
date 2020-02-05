import React, { Component } from 'react'
import Card from '../Landing/Market/Card';

export class FullMarket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: [],

        }
    }

    componentDidMount() {
        var token = localStorage.getItem('token')
        this.setState({ isLoggedIn: token ? true : false })
    }

    addProduct = (name, price) => {
        let array = this.state.cart
        array.push({ name, price })
        this.setState({ cart: array })
    }

    deleteProduct = i => {
        let a = this.state.cart
        a.splice(i, 1)
        this.setState({ cart: a })
    }


    render() {
        return (
            <section className='p-3'>
                {/* Header, titulo de Tienda. */}

                <div className="row border-bottom mb-5"><div className="col"><h1 className="display-4 text-center">Tienda!</h1></div></div>
                <div className="row">

                    {/* Cuadro de 3 x 3 dónde se muestran los ítems disponibles para la compra
                    Los items se consiguen desde la base de datos. */}

                    <div className="col col-8">
                        <section>

                            {/* Fila 1 */}
                            <div className="card-deck">
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Pelotita' price='25' body='Jaja' />
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Mordedor' price='25' body='Jaja' />
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Plato de comida' price='25' body='Jaja' />
                            </div>

                            {/* Fila 2 */}
                            <div className="card-deck">
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Collar' price='25' body='Jaja' />
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Correa' price='25' body='Jaja' />
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Cadena' price='25' body='Jaja' />
                            </div>

                            {/* Fila 3 */}
                            <div className="card-deck">
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Cucha' price='25' body='Jaja' />
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Casa' price='25' body='Jaja' />
                                <Card fullMarket='true' addProduct={(name, price) => { this.addProduct(name, price) }} stock='12' imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title='Alimento' price='25' body='Jaja' />
                            </div>
                        </section>
                    </div>

                    <div className="col col-4">
                        <section className='border p-3'>
                            <div className='row'>
                                <div className="col">
                                    <h1 className="lead">Carrito de compras:</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ul className="list-group list-group-flush">
                                        {this.state.cart.map((boi, i) => (
                                            <li key={i} className="list-group-item">
                                                <div className="row">
                                                    <div className="col col-1">
                                                        <i onClick={() => this.deleteProduct(i)} style={{ cursor: "pointer" }} className="far fa-trash-alt text-danger"></i>
                                                    </div>
                                                    <div className="col col-7">
                                                        {boi.name}
                                                    </div>
                                                    <div className="col col-3">
                                                        ${boi.price}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <button data-toggle={!this.state.isLoggedIn ? "modal" : null} data-target={!this.state.isLoggedIn ? "#staticBackdrop" : null} onClick={this.handleBuy} className={this.state.isLoggedIn ? 'btn w-100 btn-success' : 'btn w-100 btn-danger'}>{this.state.isLoggedIn ? 'Realizar compra' : 'Debe iniciar sesion para comprar'}</button>
                            </div>
                            <div className={this.state.buy ? 'd-block' : 'd-none'}>

                            </div>                        </section>
                    </div>
                </div>
            </section>
        )
    }
}

export default FullMarket
