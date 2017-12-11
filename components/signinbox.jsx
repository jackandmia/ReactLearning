import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './signinbox.css';

export default class SignInBox extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            rememberme: true
        }
        console.log("Loaded Box.")

    }
    render() {
        return (
            <div>
                <div className="container">

                    <div className="form-signin">
                        <control-label for="inputEmail" className="sr-only">Email address</control-label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange = {(event,newValue) => this.setState({username:newValue})} />
                        <control-label for="inputPassword" className="sr-only">Password</control-label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} />
                        <div className="checkbox">
                            <control-label>
                                <input type="checkbox" /> Remember me
                            </control-label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <div className="footer-text"><Link to="/"> Forgotten Password?</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}