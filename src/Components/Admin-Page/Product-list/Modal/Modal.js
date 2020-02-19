import React from "react";
import closeAllModals from "../../../shared/CloseModals";
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: 0,
            stock: 0
        };
    }
    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    handleSubmit = (obj) => {
        obj.preventDefault();

        fetch("https://rolling-pet-shop.herokuapp.com/products",
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem("token")}` }
            }
        ).then(res => res.json()).then(res => closeAllModals())
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-right w-100 sticky-top" style={{ top: "10px" }}>
                    <button type="button" className="btn btn-primary  mr-3" data-toggle="modal" data-target="#exampleModal" > Agregar producto </button>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Nuevo producto
                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label forhtml="exampleInputEmail1">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" name="name" onChange={this.handleInput} />
                                <label forhtml="exampleInputEmail1">Descripcion</label>
                                <input type="text" className="form-control" placeholder="Descripcion..." name="description" onChange={this.handleInput} />
                                <label forhtml="exampleInputEmail1">Precio</label>
                                <input type="number" className="form-control" placeholder="Precio..." name="price" onChange={this.handleInput} value={parseInt(this.state.price)} />
                                <label forhtml="exampleInputEmail1">Stock</label>
                                <input type="number" className="form-control" placeholder="Stock..." name="stock" onChange={this.handleInput} value={parseInt(this.state.stock)} />
                                <label forhtml="exampleInputEmail1">Imagen</label>
                                <input type="text" className="form-control" placeholder="URL..." name="url" onChange={this.handleInput} />

                            </div>
                            <div className="modal-footer">

                                <button className="btn btn-primary" onClick={this.handleSubmit}>Crear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Modal;