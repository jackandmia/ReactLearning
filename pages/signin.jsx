import React, {Component} from 'react';
import Navbar from '../components/navbar.jsx';
import SignInBox from '../components/signinbox.jsx';

export default class SignIn extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <div className="row justify-content-md-center">
                <div className="col-lg-4">
                    <SignInBox /> 
                </div>
            </div>   
            </div>
        )
    }
}