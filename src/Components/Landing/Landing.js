import React, { Component } from 'react'
import Slider from './Slider/Slider'
import Services from './Services/Services'
import Market from './Market/Market'


export default class Landing extends Component {



    render() {
        return (
            <React.Fragment>
                <Slider />
                <Services />
                <Market />
            </React.Fragment>
        )
    }
}
