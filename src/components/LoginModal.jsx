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
            <div className="relative bg-white w-full max-w-5xl h-[600px] md:h-[650px] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-[101] animate-in fade-in zoom-in-95 duration-500 border border-white/20">

                {/* Left Side - Visual Branding (Desktop Only) */}
                <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-black">
                    <img
                        src={loginBanner}
                        alt="Royal Heritage"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-10000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
                        <div className="space-y-4">
                            <span className="text-[var(--accent-gold)] font-bold tracking-[0.4em] uppercase text-xs">Since 1999</span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                                Join Our <br />
                                <i className="text-[var(--accent-gold)]">Royal Circle</i>
                            </h2>
                            <p className="text-gray-300 font-light text-sm max-w-sm leading-relaxed">
                                Experience exclusive early access to our curated couture collections and personalized style consultations.
                            </p>
                            <div className="pt-4 flex items-center gap-4">
                                <span className="w-12 h-px bg-[var(--accent-gold)]"></span>
                                <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">Bhagwati Creations</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-[#FCFAFA] p-8 md:p-16 flex flex-col relative items-center justify-center">
                    {/* Close Button Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-gray-400 hover:text-[var(--accent-gold)] transition-all hover:rotate-90 duration-300"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full flex flex-col items-center max-w-sm">
                        {/* Logo */}
                        <div className="mb-10 transform hover:scale-110 transition-transform cursor-pointer">
                            <LogoIcon scale={1.4} />
                        </div>

                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3 tracking-widest uppercase">Namaste</h3>
                            <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold">LOGIN / SIGN UP TO PROCEED</p>
                        </div>

                        {/* Form */}
                        <div className="w-full space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Phone Number</label>
                                <div className="flex border-b-2 border-gray-100 focus-within:border-[var(--accent-gold)] transition-all duration-500 pb-2">
                                    <div className="px-1 py-2 flex items-center gap-3">
                                        <span className="text-lg">🇮🇳</span>
                                        <span className="text-gray-900 font-bold text-sm">+91</span>
                                    </div>
                                    <input
                                        type="tel"
                                        className="flex-1 bg-transparent px-2 py-2 outline-none text-gray-900 font-medium text-lg placeholder:text-gray-200"
                                        placeholder="00000 00000"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        maxLength={10}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleLogin}
                                className="btn-gold w-full py-5 text-sm font-bold shadow-xl shadow-[var(--accent-gold)]/10"
                            >
                                Request OTP
                            </button>
                        </div>

                        {/* Footer Terms */}
                        <div className="mt-12 text-center text-[10px] text-gray-400 font-medium leading-relaxed tracking-wider">
                            <p>By continuing, you agree to Bhagwati Creations'</p>
                            <div className="flex justify-center gap-1.5 mt-1">
                                <a href="#" className="text-[var(--accent-gold)] hover:underline">Privacy Policy</a>
                                <span>&</span>
                                <a href="#" className="text-[var(--accent-gold)] hover:underline">Terms of Service</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
