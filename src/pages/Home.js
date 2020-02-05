import React, { Component } from 'react'
import Market from '../Components/Market/FullMarket';
import Services from '../Components/Landing/Services/Services';
import Slider from '../Components/Landing/Slider/Slider';

import ProductList from '../Components/Admin-Page/Product-list/Product-list';


export default class Home extends Component {
    render() {
        return (
            <section>
                <Slider />
                <Services />
                <Market></Market>
            </section>
        )
    }
}
