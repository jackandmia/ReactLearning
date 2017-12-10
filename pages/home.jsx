import React, { Component } from 'react';

import Navbar from '../components/navbar.jsx';

import Jumbotron from '../components/jumbotron.jsx';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Home" subtitle="This is the Home component" />
                <div className="container">
                    <h2>Welcome</h2>
                    <p>This is from the Home component</p>
                </div>
            </div>
        );
    }
}