import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import Jumbotron from '../components/jumbotron.jsx';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Contact" subtitle="This is the Contact component" />
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>This is from the Home component</p>
                </div>
            </div>
        );
    }
}