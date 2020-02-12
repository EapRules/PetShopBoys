import React, { Component } from 'react'
import imagen2 from '../../../images/cancel.png'
import './Fail.css'


export default class Fail extends Component {
    render() {
        return (
            <div className="row1">

                <div className="text-center">
                </div>

                <div class="text-center bg-fail">
                    <div className="img">
                        <img className="card-img-top img-fluid img-2" src={imagen2}  alt="..." />
                    </div>

                    <div className="text-center">
                        <h1>Algo paso verificar!</h1>
                    </div>

                </div>

            </div>




        )
    }
}
