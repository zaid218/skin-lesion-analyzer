import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const navigate = useNavigate();

    const clearLocalStorage = () => {
        localStorage.removeItem('imageFile');
        localStorage.removeItem('imageUrl');
    };

    const handleLogin = () => {
        clearLocalStorage();
        if (role === 'patient' && email === 'one@one.com' && password === 'one') {
            localStorage.setItem('role', 'patient');
            navigate('/home');
        } else if (role === 'doctor' && email === 'zaidk9620@gmail.com' && password === 'MMZKark#9620') {
            localStorage.setItem('role', 'doctor');
            navigate('/doctor');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8">Login</h1>
                <div className="mb-4">
                    <button onClick={() => setRole('patient')} className={`px-4 py-2 ${role === 'patient' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-l`}>Patient</button>
                    <button onClick={() => setRole('doctor')} className={`px-4 py-2 ${role === 'doctor' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-r`}>Doctor</button>
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded w-full">Login</button>
                {role === 'patient' && (
                    <button onClick={() => navigate('/signup')} className="mt-4 text-blue-500 w-full">Signup</button>
                )}
            </div>
        </div>
    );
}

export default LoginPage;
