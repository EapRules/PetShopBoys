import React, { Component } from 'react'

export default class MarketCard extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="card" style={{ width: 223, height: 400 }}>
                <img src={this.props.imgUrl} className="card-img-top img-fluid" alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title} - ${this.props.price}</h5>
                    <p style={{ height: 50 }} className="card-text text-truncate">{this.props.body}</p>
                    <button className="btn btn-success" onClick={() => { this.props.addProduct(this.props.title, this.props.price) }}><i className="fas fa-shopping-cart"></i> Agregar</button>
                </div>
            </div>
        )
    }
}
