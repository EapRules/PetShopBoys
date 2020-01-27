import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import MarketCard from './Card'

export default class Market extends Component {

    state = {
        market: [],
        isLoggedIn: localStorage.getItem('token') ? true : false,
        buy: false,
        redirectToLogin: false
    }

    addProduct = (name, price) => {
        let array = this.state.market
        array.push({ name, price })
        this.setState({ market: array })
    }

    deleteProduct = i => {
        let a = this.state.market
        a.splice(i, 1)
        this.setState({ market: a })
    }

    handleBuy = () => {
        if (this.state.isLoggedIn) {
            console.log("te compraste todo")
        } else {
            window.location.href = '/login'
        }
    }

    render() {
        if (this.state.redirectToLogin) { return <Redirect to='/login' /> }
        return (
            <Fragment>
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col col-8">
                            <div className="row ">
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="40" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-AD-C9-rBVaG1Zd3eWAeSuqAADlCEZxRbk441.jpg/baby-dog-toys-pet-toys-puppy-dog-and-cat.jpg' title='Pelotita' body='Rebota mucho' /> </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="52" imgUrl='https://www.joopzy.com/wp-content/uploads/2019/01/Cute-Pet-Dog-Toys-Chew-Squeaker-Animals-Pet-Toys-Plush-Puppy-Honking-Squirrel-For-Dogs-Cat-768x768.jpg' title='Mordedor' body='Hace cuack cuando lo muerde' /> </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="30" imgUrl='https://dynamic.indigoimages.ca/gifts/848404112284.jpg?quality=10&width=320&maxheight=320&lang=en' title='Peresozo' body='Muy posiblemente como vos' /> </div>
                            </div>
                            <div className="row">
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="42" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g5-M00-23-45-rBVaI1nd2ViAQ_jsAAJAfIAdDYM207.jpg/fashion-plastic-dog-toys-pet-treasure-hunting.jpg' title='Otro mordedor' body='Parece pista de hotwils jajajaj' /> </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="65" imgUrl='https://cdn.shopify.com/s/files/1/0964/0162/products/Q966711-pet-toys-with-logo-1_large.jpg?v=1546894015' title='Huesito' body='Esta muy bonito' /> </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="23" imgUrl='https://images-na.ssl-images-amazon.com/images/I/71DPo134bLL._SL1500_.jpg' title='Kong' body='Hong' /> </div>
                            </div>
                            <div className="row">
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="15" imgUrl='https://cdn.shopify.com/s/files/1/0039/9297/7519/products/Sound-Pig-Pet-Toys-Screaming-Rubber-Squeak-Toys-for-Small-Medium-Dogs-Cats-Attractive-Chewing-Dog_900x.jpg?v=1542864536' title='Un chancho' body='Se me escapo, lo ibamos a comer en las fiestas y aparecio con un chaleco, un capo' /> </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="20" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-AD-C9-rBVaG1Zd3eWAeSuqAADlCEZxRbk441.jpg/baby-dog-toys-pet-toys-puppy-dog-and-cat.jpg' title='jajas' body='xd boi' /> </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="48" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-AD-C9-rBVaG1Zd3eWAeSuqAADlCEZxRbk441.jpg/baby-dog-toys-pet-toys-puppy-dog-and-cat.jpg' title='jajas' body='xd boi' /> </div>
                            </div>
                        </div>
                        <div className="col col-4 border rounded p-2">
                            <div className="row">
                                <div className="col text-center mb-4">
                                    <h1 className="display-4 mb-2">Todo para tu mascota</h1>
                                    <h2 className="lead mb-2">En un sólo lugar</h2>
                                </div>
                            </div>
                            <hr className='mt-0' />
                            <div className="row">
                                <div className="col text-center">
                                    <p style={{ fontSize: 14 }} className="lead my-0">Aceptamos todas las tarjetas de creditos</p>
                                    <p className="lead">12 cuotas sin interes!</p>
                                </div>
                            </div>
                            <div >
                                <div className='row'>
                                    <div className="col">
                                        <h1 className="lead">Carrito de compras:</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-group list-group-flush">
                                            {this.state.market.map((boi, i) => (
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
                                    <button onClick={this.handleBuy} className={this.state.isLoggedIn ? 'btn w-100 btn-success' : 'btn w-100 btn-danger'}>{this.state.isLoggedIn ? 'Realizar compra' : 'Debe iniciar sesion para comprar'}</button>
                                </div>
                                <div className={this.state.buy ? 'd-block' : 'd-none'}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </Fragment>
        )
    }
}
