import React, { Component } from 'react'
import imagen2 from '../../../images/cancel.png'
import './Fail.css'


export default class Fail extends Component {
    render() {
        return (
            <div className="row1">


                <div class="text-center p-3  ">
                    <div className="img mb-2">
                        <img className="card-img-top img-fluid img-2" src={imagen2}  alt="..." />
                    </div>

                    <div className="text-center bg-danger ">
                        <h1>Su compra no se pudo realizar. Intente nuevamente.</h1>
                    </div>

                </div>

            </div>




        )
    }
}