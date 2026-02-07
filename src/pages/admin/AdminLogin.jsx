import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../../components/Branding';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded auth for demonstration
        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
                <div className="flex flex-col items-center mb-10">
                    <LogoIcon scale={1.5} className="mb-6" />
                    <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-widest uppercase">Admin Panel</h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                            placeholder="Enter username"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[var(--accent-gold)] text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all duration-300 shadow-xl shadow-gold/10">
                        Secure Login
                    </button>
                </form>
                <div className="mt-4 text-center text-xs text-gray-500">
                    Default: admin / admin123
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
