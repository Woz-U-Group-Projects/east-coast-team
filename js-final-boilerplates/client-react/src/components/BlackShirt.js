import React, { Component } from 'react'
import Navbar from './Navbar';
import "../styling/BlackShirt.css"
import BlackShirtImg from "../images/Black Shirt.jpg"

export class BlackShirt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    continueShopping = () => {
        window.location.href="http://localhost:3000/"
    }

    render() {
        return (
            <div className='container-fluid'>
            <Navbar></Navbar>
                <div>
                    <div className="row">
                        <div className='col text-left'>
                            <h4>This is the Black Shirt page</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={BlackShirtImg} alt="" className='shirt'></img>
                        </div>
                        <div className='col description text-left'>
                            <br></br>
                            <h4>This is a marvelous, comfortable black shirt this is
                            made of only the finest cotton. Sizes range from small to large.</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button type="button" class="btn btn-primary btn-lg contShopping" onClick={this.continueShopping}>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlackShirt
