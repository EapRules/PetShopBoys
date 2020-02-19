import React, { Component } from 'react'
import Slider from '../Components/Landing/Slider/Slider';
import Services from '../Components/Landing/Services/Services';
import FullMarket from '../Components/Market/FullMarket';
import * as qs from 'query-string';



export default class Home extends Component {
    componentDidMount() {
        const parsed = qs.parse(window.location.search).collection_id ? qs.parse(window.location.search) : null;
        if (parsed) {
            fetch(`https://rolling-pet-shop.herokuapp.com/sales/${parsed.collection_id}`, {
                method: "PUT",
                // body: JSON.stringify({ products: toBuy }),
                headers: { "Content-Type": "application/json", "authorization": `Bearer ${localStorage.getItem('token')}` }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    if (res.response.status !== 'approved') {
                        this.props.history.push('/compra/failure')
                    } else {
                        this.props.history.push('/compra/success')
                    }
                })
        }
    }

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
{/* <Route exact path="/admin" component={Sidebar}/> */ }
{/* <Route exact path="/admin/productos" component={Sidebar,ProductList}></Route> */ }