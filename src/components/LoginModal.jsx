import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X } from 'lucide-react';
import loginBanner from '../assets/login_banner.png';
import { LogoIcon } from './Branding';

const LoginModal = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const { login } = useShop();

    if (!isOpen) return null;

    const handleLogin = () => {
        if (phoneNumber.length >= 10) {
            login();
            onClose();
            alert("Logged in successfully!");
        } else {
            alert("Please enter a valid phone number");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white w-full max-w-4xl h-[500px] md:h-[600px] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-[101] animate-in fade-in zoom-in-95 duration-200 border border-white/20">
                {/* ... existing content ... */}
                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col relative items-center justify-center">
                    {/* Close Button Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full flex flex-col items-center max-w-xs">
                        {/* Logo */}
                        <div className="mb-8">
                            <LogoIcon scale={1.2} />
                        </div>

                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-serif font-bold text-[var(--accent-gold)] mb-2 tracking-widest uppercase">Login / Sign Up</h3>
                            <p className="text-gray-400 text-xs tracking-widest">ENTER YOUR CREDENTIALS</p>
                        </div>

                        {/* Form */}
                        <div className="w-full space-y-4 max-w-xs">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                            <div className="flex border border-gray-300 rounded overflow-hidden focus-within:border-[#ed2585] transition-colors">
                                <div className="bg-gray-50 px-3 py-2 border-r border-gray-300 flex items-center gap-2">
                                    <span className="text-lg">🇮🇳</span>
                                    <span className="text-gray-600 text-sm">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    className="flex-1 px-4 py-2 outline-none text-gray-800"
                                    placeholder="Phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            <button
                                onClick={handleLogin}
                                className="w-full bg-black text-white py-3 rounded font-medium text-sm hover:bg-gray-800 transition-colors uppercase tracking-wide mt-6"
                            >
                                Request OTP
                            </button>
                        </div>

                        {/* Footer Terms */}
                        <div className="mt-8 text-center text-xs text-gray-400">
                            <p>I accept that I have read & understood</p>
                            <div className="flex justify-center gap-1 mt-1">
                                <a href="#" className="underline hover:text-[#ed2585]">Privacy Policy</a>
                                <span>and</span>
                                <a href="#" className="underline hover:text-[#ed2585]">T&Cs</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
