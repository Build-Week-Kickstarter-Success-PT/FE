import React from 'react';


import './App.css';
import Navbar from './components/Navbar';
import LoginForm from "./components/LoginForm";

function App() {
    return ( <div className="app">
        <Navbar />
        <LoginForm />
        </div>);
    }

    export default App;