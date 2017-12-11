import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer.jsx';
import SignIn from './pages/signin.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/register" component={Home} />
                    </div>
                </Router>
                <Footer />
   
            </div>
        )
    }
}