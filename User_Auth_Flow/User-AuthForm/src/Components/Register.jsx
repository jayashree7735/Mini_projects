import React from 'react';


const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement registration logic
        alert('Registered successfully!');
    };
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;