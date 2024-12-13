import React from 'react';
import { useAuth } from '../authcontext';
const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the Dashboard!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};
export default Dashboard;