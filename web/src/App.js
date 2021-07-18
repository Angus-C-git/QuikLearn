import React from 'react';
import './static/App.css';
// import NavBar from './components/NavBar';
import Dashboard from './routes/dash/Dashboard';
import Profile from './routes/profile/Profile';
import Login from './routes/auth/Login';
import Register from './routes/auth/Register';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";


//tmp
// import HomePage from './routes/dash/CHomePage';

// TODO: auth

function App() {

    const setInitialToken = () => {
        if (localStorage.getItem('token')) {
          return localStorage.getItem('token');
        }

        return null;
    };

    const [token, setToken] = React.useState(setInitialToken);

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
                <Route path="/profile">
                    <Profile token={token}/>
                </Route>
                <Route path="/login">
                    <Login token={token} setToken={setToken}/>
                </Route>
                <Route path="/register">
                    <Register token={token} setToken={setToken}/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard token={token} />
                </Route>
                {/* <Route path="/dashboard">
                    <HomePage token={token} />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
