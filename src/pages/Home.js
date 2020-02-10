import React, { Component } from 'react'
import Slider from '../Components/Slider/Slider';
import Services from '../Components/Services/Services';
import Market from '../Components/Market/Market';



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
{/* <Route exact path="/admin" component={Sidebar}/> */}
{/* <Route exact path="/admin/productos" component={Sidebar,ProductList}></Route> */}