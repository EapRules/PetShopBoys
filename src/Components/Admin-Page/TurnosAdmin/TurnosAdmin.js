import React, { Component } from 'react'
import moment from 'moment'
export default class TurnosAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TurnosAdmin: []
        }
    }
    componentDidMount() {
        fetch('https://rolling-pet-shop.herokuapp.com/turns', {
            method: "GET",
            headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => res.json())
            .then(res => this.setState({ TurnosAdmin: res.result }))
    }
    render() {
        return (
            <div>
                <table className="table table-striped table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.TurnosAdmin.map((item, i) => (
                            <tr>
                                <th key={i}>{i}</th>
                                <td>{item.petName}</td>
                                <td>{item.ownerName}</td>
                                <td>{moment(item.date).format('LLL')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}