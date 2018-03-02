import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fetchData from '../helpers/fetchData.js';


import './signinbox.css';

export default class SignInBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rememberme: true
        }

        this.handleSignin = this.handleSignin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.HandleRememberMeChange = this.HandleRememberMeChange.bind(this);
    }

    handleSignin(event) {
        event.preventDefault();
        console.log(this.state);
        const deployedUrl = 'http://cralis-001-site5.ftempurl.com/api/authenticate';

        fetchData('POST', deployedUrl, this.state);
    }

    handleEmailChange(e) {
        this.setState( { username: e.target.value } );
    }
    handlePasswordChange(e) {
        this.setState( { password: e.target.value } );
    }
    HandleRememberMeChange(e) {
        console.log(e.target);
        this.setState( { rememberme: e.target.value } );
    }

    render() {
        return (
            <div> 
                <div className="container">
                    <div className="form-signin">
                        <control-label for="inputEmail" className="sr-only">Email address</control-label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleEmailChange} required autoFocus />
                        
                        <control-label for="inputPassword" className="sr-only">Password</control-label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} required />
                        <div className="checkbox" onChange={this.HandleRememberMeChange}>
                            <control-label>
                                <input type="checkbox" value="1" /> Remember me
                            </control-label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleSignin}>Sign in</button>
                        <div className="footer-text"><Link to="/"> Forgotten Password?</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}