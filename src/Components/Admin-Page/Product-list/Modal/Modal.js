import React from "react";
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            thumbnailUrl: ""
        };
    }
    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
                <div className="text-right w-100 sticky-top" style={{ top: "10px" }}>
                    <button
                        type="button"
                        className="btn btn-primary  mr-3"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Agregar producto
          </button>
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
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Nombre"
                                    name="title"
                                    onChange={this.handleInput}
                                />
                                <label forhtml="exampleInputEmail1">Descripcion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Descripcion..."
                                    name="thumbnailUrl"
                                    onChange={this.handleInput}
                                />
                                <label forhtml="exampleInputEmail1">Precio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Precio..."
                                    name="thumbnailUrl"
                                    onChange={this.handleInput}
                                />
                                <label forhtml="exampleInputEmail1">Imagen</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="URL..."
                                    name="url"
                                    onChange={this.handleInput}
                                />
                                
                            </div>
                            <div className="modal-footer">
                                
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={this.handleAdd}
                                    data-dismiss="modal"
                                >
                                    Crear
                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Modal;