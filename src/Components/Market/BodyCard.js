import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import MarketCard from './MarketCard'
import YouTube from 'react-youtube'

export default class BodyCard extends Component {

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
            // window.location.href = '/login'
            console.log("No te compraste nada")
        }
    }

    render() {
        let opts = {
            width: '360',
            playerVars: {
                autoplay: 1,
                loop: 1,
                mute: 1
            }
        }
        // if (this.state.redirectToLogin) { return <Redirect to='/login' /> }
        return (
            <Fragment>
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col col-8">
                            <div className="row ">
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="40" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-AD-C9-rBVaG1Zd3eWAeSuqAADlCEZxRbk441.jpg/baby-dog-toys-pet-toys-puppy-dog-and-cat.jpg' title='Pelotita' body='Rebota mucho' />
                                </div>
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="52" imgUrl='https://www.joopzy.com/wp-content/uploads/2019/01/Cute-Pet-Dog-Toys-Chew-Squeaker-Animals-Pet-Toys-Plush-Puppy-Honking-Squirrel-For-Dogs-Cat-768x768.jpg' title='Mordedor' body='Hace cuack cuando lo muerde' />
                                </div>
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="30" imgUrl='https://i.ebayimg.com/images/g/dYYAAOSwtRNdgL-J/s-l300.jpg' title='Mordedor' body='Muy posiblemente como vos' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="42" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g5-M00-23-45-rBVaI1nd2ViAQ_jsAAJAfIAdDYM207.jpg/fashion-plastic-dog-toys-pet-treasure-hunting.jpg' title=' Mordedor 2' body='Parece pista de hotwils jajajaj' />
                                </div>
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="65" imgUrl='https://cdn.shopify.com/s/files/1/0964/0162/products/Q966711-pet-toys-with-logo-1_large.jpg?v=1546894015' title='Huesito' body='Esta muy bonito' />
                                </div>
                                <div className="col my-2"><MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="23" imgUrl='https://images-na.ssl-images-amazon.com/images/I/71DPo134bLL._SL1500_.jpg' title='Kong' body='Hong' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="15" imgUrl='https://cdn.shopify.com/s/files/1/0039/9297/7519/products/Sound-Pig-Pet-Toys-Screaming-Rubber-Squeak-Toys-for-Small-Medium-Dogs-Cats-Attractive-Chewing-Dog_900x.jpg?v=1542864536' title='Un chancho' body='Se me escapo, lo ibamos a comer en las fiestas y aparecio con un chaleco, un capo' />
                                </div>
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="20" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-AD-C9-rBVaG1Zd3eWAeSuqAADlCEZxRbk441.jpg/baby-dog-toys-pet-toys-puppy-dog-and-cat.jpg' title='jajas' body='xd boi' />
                                </div>
                                <div className="col my-2">
                                    <MarketCard addProduct={(name, price) => { this.addProduct(name, price) }} price="48" imgUrl='https://www.dhresource.com/webp/m/0x0s/f2-albu-g2-M01-AD-C9-rBVaG1Zd3eWAeSuqAADlCEZxRbk441.jpg/baby-dog-toys-pet-toys-puppy-dog-and-cat.jpg' title='jajas' body='xd boi' />
                                </div>
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

                            {/* Starts */}
                            <div >
                                <YouTube videoId='3a9ncMJLMXg' opts={opts} className='mt-3' />
                                <YouTube videoId='bvFhnfzb85c' opts={opts} className='mt-5' />
                            </div>
                            {/* Ends */}
                        </div>
                    </div>
                </div >
            </Fragment >
        )
    }
}
