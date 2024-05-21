import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (email && password) {
            alert('Signup successful');
            navigate('/');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Signup</h1>
            <input
                type="email"
                placeholder="Email"
                className="mb-4 p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="mb-4 p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup} className="px-4 py-2 bg-blue-500 text-white rounded">Signup</button>
            <button onClick={() => navigate('/')} className="mt-4 text-blue-500">Back to Login</button>
        </div>
    );
}

export default SignupPage;
