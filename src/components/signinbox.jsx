import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
    }

    handleSignin(event) {
        event.preventDefault();

        this.setState(
            {
                username: this.refs.username.value,
                password: this.refs.password.value
            }, () => console.log(this.state)
        );
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-signin">
                        <control-label for="inputEmail" className="sr-only">Email address</control-label>
                        <input type="email" ref="username" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <control-label for="inputPassword" className="sr-only">Password</control-label>
                        <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox">
                            <control-label>
                                <input type="checkbox" /> Remember me
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