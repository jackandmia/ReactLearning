import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './signinbox.css';

class SignInBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rememberme: true
        }
    }

    loginClick(event) {
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
                    <form className="form-signin" onSubmit={this.loginClick.bind(this)}>
                        <control-label for="inputEmail" className="sr-only">Email address</control-label>
                        <input type="email" ref="username" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <control-label for="inputPassword" className="sr-only">Password</control-label>
                        <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox">
                            <control-label>
                                <input type="checkbox" /> Remember me
                            </control-label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <div className="footer-text"><Link to="/"> Forgotten Password?</Link></div>
                    </form>
                </div>
            </div>
        );
    }
}