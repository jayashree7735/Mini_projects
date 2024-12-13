import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const authcontext = createContext();
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const login = () => {
        setIsAuthenticated(true);
        navigate('/dashboard');
    };
    const logout = () => {
        setIsAuthenticated(false);
        navigate('/');
    };
    return (
        <authcontext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </authcontext.Provider>
    );
};
export const useAuth = () => useContext(authcontext);