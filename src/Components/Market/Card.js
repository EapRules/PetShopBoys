import React, { Component } from 'react'

export default class MarketCard extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div class="card">
                <img src={this.props.imgUrl} class="card-img-top" alt={this.props.title} />
            <div class="card-body">
                    <h5 class="card-title">{this.props.title} - ${this.props.price}</h5>
                    <p class="card-text">{this.props.body}</p>
                    <a href="!#" class="btn btn-success"><i className="fas fa-shopping-cart"></i> Agregar</a>
                </div>
            </div>
        )
    }
}
