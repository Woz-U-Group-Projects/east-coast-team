import React, { Component } from 'react'
import WhiteShirtImg from "../images/White Shirt.jpg"
import BlackShirtImg from "../images/Black Shirt.jpg"
import '../styling/ProductDisplay.css'

export class ProductDisplay extends Component {
    render() {
        return (
            <div>
            <div className='container'>
                <h1 className="text-center">Our Products</h1>
                <div className="title row">
                    <h3 className="col-6 text-center">White Shirt</h3>
                    <h3 className="col-6 text-center">Black Shirt</h3>
                </div>
                <div className="image row">
                    <div className="col-6 text-center">
                        <a href='http://localhost:3000/whiteshirt'><img src={WhiteShirtImg} alt="" className='shirt'></img></a>
                    </div>
                    <div className="col-6 text-center">
                        <a href='http://localhost:3000/blackshirt'><img src={BlackShirtImg} alt="" className="shirt"></img></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ProductDisplay


