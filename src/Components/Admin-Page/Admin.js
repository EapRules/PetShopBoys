import React, { Component } from 'react'
import ProductList from './Product-list/Product-list'

export default class Admin extends Component {
    render() {
        return (
            <div className="container">
                <ProductList/>
            </div>
        )
    }
}
