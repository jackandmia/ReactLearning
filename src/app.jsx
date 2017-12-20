import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer.jsx';
import SignIn from './pages/signin.jsx';
import Register from './pages/register.jsx';

var defaultUser = {username: "", password: ""};

const userReducer = (state=defaultUser, action ) => {
    switch(action.type) {
        case "USER_LOGIN": {
            state = {...state, username: action.payload.username, password: action.payload.password}
            break;
        }
        case "USER_LOGOUT": {
            state = {...state, username: "", password: ""}
            break;
        }
    }
    return state;
}

const userRoleReducer = (state=[],action) => {
    return state;
}

const reducers = combineReducers({
    user: userReducer,
    roles: userRoleReducer
})

const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed" , store.getState())
});

store.dispatch({ type: "USER_LOGIN", payload: {username: "james", password: "password"}})
store.dispatch({ type: "USER_LOGIN", payload: {username: "craig", password: "password"}})
store.dispatch({ type: "USER_LOGOUT", payload: ""})

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
                        <Route path="/register" component={Register} />
                    </div>
                </Router>
                <Footer />
   
            </div>
        )
    }
}