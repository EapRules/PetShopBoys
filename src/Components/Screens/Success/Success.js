import React, { Component } from "react";
import imagen1 from "../../../images/check.png";
import "./Success.css";

export default class Success extends Component {
    render() {
        return (
            <div className="row1">
                <div className="text-center">

                </div>


                <div className="card text-white text-center aling-items-center">
                    <img className="card-img-top img-fluid img-1"
                        src={imagen1}
                        alt="..." />
                </div>
                <div className="text-center bg-success">
                    <h1>Su compra Fue Exitosa!</h1>
                </div>
            </div>


        );
    }
}