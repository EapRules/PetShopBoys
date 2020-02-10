import React, { Component } from 'react'
import MarketCard from './MarketCard'

export class FullMarket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selfCart: [],
            cart: [],
            market: []
        }
    }

    componentDidMount() {
        var token = localStorage.getItem('token')
        this.setState({ isLoggedIn: token ? true : false })

        fetch('https://rolling-pet-shop.herokuapp.com/products')
            .then(res => res.json())
            .then(res => this.setState({ market: res.result }))
    }

    addProduct = (name, id, qtty, price) => {
        // Se trae los datos del carrito...
        let array = this.state.cart
        let sendArray = []


        // Se verifica si existe algun producto que contenga
        // La id del producto que se intenta agregar.
        const found = array.findIndex((element) => {
            return element.productId === id
        })

        // En caso de encontrar algún resultado mayor a 
        // -1, agregar un numero al qtty y ponerlo en el array.

        if (found >= 0) {
            array[found].quantity++;
            this.setState({ cart: array })
        } else {
            array.push({ name, productId: id, price, quantity: qtty })
            this.setState({ cart: array })
        }
    }

    deleteProduct = i => {
        let a = this.state.cart
        a.splice(i, 1)
        this.setState({ cart: a })
    }

    handleBuy = i => {
        let toBuy = this.state.cart
        console.log("toBuy Content:", toBuy)
        for (i = 0; i < toBuy.length; i++) {
            delete toBuy[i].name
            delete toBuy[i].price
        }
        fetch("https://rolling-pet-shop.herokuapp.com/sales", {
            method: "POST",
            body: JSON.stringify({ products: toBuy }),
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => console.log(res))
        // .then(data => console.log(data))
        //     this.setState({ loading: false })
        //     if (data.token) {
        //         Swal.fire({
        //             icon: 'success',
        //             title: `${data.message}`,
        //             showConfirmButton: false,
        //             timer: 1500
        //         })
        //     }
        //     else {
        //         Swal.fire({
        //             icon: 'error',
        //             title: `${data.message}`,
        //             showConfirmButton: false,
        //             timer: 1500
        //         })
        //     }
    }

    // };

    // }


    render() {

        console.log(this.state.cart)

        return (
            <section className='p-3'>

                <div className="row border-bottom mb-5"><div className="col"><h1 className="display-4 text-center">Tienda!</h1></div></div>
                <div className="row">

                    <div className="col col-8">
                        <section>
                            {this.state.market.map(i => (
                                <MarketCard fullMarket='true' addProduct={(name, id, qtty, price) => { this.addProduct(i.name, i._id, 1, i.price) }} stock={i.stock} imgUrl='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' title={i.name} price={i.price} body={i.description} />

                            ))}
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
                                                        {boi.qtty} - {boi.name}
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
