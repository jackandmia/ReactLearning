import React, { Component } from 'react';

import Navbar from '../components/navbar.jsx';
import Jumbotron from '../components/jumbotron.jsx';

export default class Register extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Registration" subtitle="Now you can register" />
                <div className="container">
                    <h2>Register</h2>
                    <p>In here we'll have the registration form.</p>
                </div>
            </div>
        );
    }
}