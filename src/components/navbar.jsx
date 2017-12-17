import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Image1 from '../images/logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <Image1 width={20} height={20} alt="Accufinance.com" />&nbsp; 
                    Learning React!
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-success navbutton" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary navbutton" to="/signin">Sign In</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

