import React, { Component } from 'react'
import Slider from '../Components/Landing/Slider/Slider';
import Services from '../Components/Landing/Services/Services';
import FullMarket from '../Components/Market/FullMarket';



export default class Home extends Component {
    render() {
        return (
            <section>
                <Slider />
                <Services />
                <FullMarket />
            </section>
        )
    }
}
{/* <Route exact path="/admin" component={Sidebar}/> */}
{/* <Route exact path="/admin/productos" component={Sidebar,ProductList}></Route> */}