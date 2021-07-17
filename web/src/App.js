import React from 'react';
import './static/App.css';
// import NavBar from './components/NavBar';
// import Dashboard from './routes/Dashboard';
// import Profile from './routes/Profile';
import Login from './routes/auth/Login';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

// TODO: auth

function App() {

    return (
        <BrowserRouter>
            <header>
                <title>QuikLearn</title>
            </header>
            {/*<NavBar />*/}
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                {/* <Route path="/profile">
                    <Profile />
                </Route> */}
                <Route path="/login">
                    <Login />
                </Route>
                {/* <Route path="/dashboard">
                    <Dashboard />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
