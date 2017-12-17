import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Craig Lister Learning &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>        
        );
    }
}