import React, { Component } from 'react'
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';

import ProductList from '../Components/Admin-Page/Product-list/Product-list';


export default class Home extends Component {
    render() {
        return (
            <section>
                <Slider />
                <Services />
                <Market />
            </section>
        )
    }
}
