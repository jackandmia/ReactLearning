import React, { Component } from 'react';

import Navbar from '../components/navbar.jsx';
import Jumbotron from '../components/jumbotron.jsx';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="About" subtitle="This is the About component" />
                <div className="container">
                    <h2>About</h2>
                    <p>This is from the Home component</p>
                </div>
            </div>
        );
    }
}