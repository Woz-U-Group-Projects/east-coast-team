import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './Navbar'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: ""
        }
    }

    componentDidMount(){
        axios.get('/users/profile')
        .then(response => {
            console.log(response)
            this.setState({firstName: response.data.FirstName, lastName: response.data.LastName, username: response.data.Username, email: response.data.Email})
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentWillUnmount(){
        this.setState({firstName: "", lastName: "", username: "", email: ""})
    }

    logOut = () => {
        window.location.href="http://localhost:3000/logout"
    }
    
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>Hello {this.state.firstName}!</h1>
                <p>Full Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Username: {this.state.username}</p>
                <p>Email: {this.state.email}</p>
                <button onClick={this.logOut}>Log Out</button>
            </div>
        )
    }
}

export default Profile
