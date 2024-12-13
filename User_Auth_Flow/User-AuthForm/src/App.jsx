import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import PrivateRouter from './Components/PrivateRouter';
import { AuthProvider } from './authcontext';
import './App.css';


const App = () => {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<PrivateRouter><Dashboard /></PrivateRouter>} />
                    </Routes>
                </div>
            </AuthProvider>

        </Router>

    );
};


export default App;
