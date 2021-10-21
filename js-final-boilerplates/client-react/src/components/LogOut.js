import axios from 'axios'
import React, { Component } from 'react'

export class LogOut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount(){
        axios.get('users/logout')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        window.location.href="http://localhost:3000/"
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LogOut
