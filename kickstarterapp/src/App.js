import React from 'react';


import './App.css';
import Navbar from './components/Navbar';
import LoginForm from "./components/LoginForm";
import { Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';

function App() {
    return ( <div className="app">
        <Navbar />
        <Route path="/login">
            <LoginForm />
        </Route>
        <Route path="/signup">
            <SignUpForm />
        </Route>


        </div>);
    }

    export default App;