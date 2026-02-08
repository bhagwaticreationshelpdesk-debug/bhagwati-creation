import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X } from 'lucide-react';
import loginBanner from '../assets/login_banner.png';
import { LogoIcon } from './Branding';

const LoginModal = ({ isOpen, onClose }) => {
    // State Declarations
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState('PHONE'); // 'PHONE' | 'OTP'
    const [isLoading, setIsLoading] = useState(false);

    // Context
    const { login } = useShop();

    if (!isOpen) return null;



    const handleSendWhatsappOTP = () => {
        if (phoneNumber.length === 10) {
            setIsLoading(true);
            // Simulate Sending OTP via WhatsApp Provider
            setTimeout(() => {
                setIsLoading(false);
                setStep('OTP');
                alert(`WhatsApp verification code sent to +91 ${phoneNumber}`);
            }, 1000);
        } else {
            alert("Please enter a valid 10-digit WhatsApp number");
        }
    };

    const handleVerifyOTP = () => {
        if (otp.length === 6) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                login();
                onClose();
                alert("Verified successfully via WhatsApp!");
            }, 1000);
        } else {
            alert("Please enter a valid 6-digit code");
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white w-full max-w-4xl h-[550px] md:h-[600px] rounded-2xl shadow-2xl overflow-hidden flex z-[10000] animate-in fade-in zoom-in-95 duration-300">

                {/* Visual Branding Side */}
                <div className="hidden md:flex md:w-1/2 relative bg-black items-center justify-center overflow-hidden">
                    <img
                        src={loginBanner}
                        alt="Login Banner"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="relative z-10 text-center p-8 space-y-6">
                        <h2 className="text-4xl font-serif text-white">
                            The Royal <br /> <span className="text-[var(--accent-gold)]">Experience</span>
                        </h2>
                        <p className="text-white/80 font-light text-sm">
                            Join our exclusive community for early access to new designer collections.
                        </p>
                    </div>
                </div>

                {/* Login Form Side */}
                <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-20 cursor-pointer pointer-events-auto"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex-1 flex flex-col justify-center max-w-xs mx-auto w-full z-10">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <LogoIcon scale={0.8} className="mx-auto mb-6" />
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                {step === 'PHONE' ? 'WhatsApp Login' : 'Verify Code'}
                            </h3>
                            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                                {step === 'PHONE' ? 'Secure & Fast Verification' : 'Sent to your WhatsApp'}
                            </p>
                        </div>

                        {/* Step 1: Phone Input */}
                        {step === 'PHONE' && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">WhatsApp Number</label>
                                    <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#25D366] py-2 transition-all cursor-text" onClick={() => document.getElementById('wa-input').focus()}>
                                        <span className="text-lg mr-3">🇮🇳</span>
                                        <span className="text-sm font-bold text-gray-900 mr-2">+91</span>
                                        <input
                                            id="wa-input"
                                            type="tel"
                                            className="flex-1 bg-transparent border-none outline-none text-lg font-medium text-gray-900 placeholder:text-gray-300 h-10"
                                            placeholder="Enter Number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            maxLength={10}
                                            autoFocus
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleSendWhatsappOTP}
                                    disabled={phoneNumber.length < 10 || isLoading}
                                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${phoneNumber.length === 10 && !isLoading
                                            ? 'bg-[#25D366] text-white hover:bg-[#20bd5a] hover:shadow-[#25D366]/30 cursor-pointer active:scale-95'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    {isLoading ? 'Sending...' : 'Get Verification Code'}
                                </button>

                                <p className="text-[10px] text-center text-gray-400 leading-relaxed max-w-[250px] mx-auto">
                                    We will send a 6-digit verification code to your WhatsApp number.
                                </p>
                            </div>
                        )}

                        {/* Step 2: OTP Input */}
                        {step === 'OTP' && (
                            <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                <div className="space-y-4">
                                    <div className="flex justify-between gap-2">
                                        {[0, 1, 2, 3, 4, 5].map((i) => (
                                            <input
                                                key={i}
                                                id={`otp-${i}`}
                                                type="text"
                                                maxLength={1}
                                                className="w-10 h-12 border-2 border-gray-100 rounded text-center text-xl font-bold text-gray-900 focus:border-[#25D366] focus:ring-0 outline-none transition-all cursor-text bg-white"
                                                value={otp[i] || ''}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/\D/g, '');
                                                    if (val) {
                                                        const newOtp = otp.split('');
                                                        newOtp[i] = val;
                                                        setOtp(newOtp.join('').substring(0, 6));
                                                        if (i < 5) document.getElementById(`otp-${i + 1}`).focus();
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Backspace' && !otp[i] && i > 0) {
                                                        document.getElementById(`otp-${i - 1}`).focus();
                                                    }
                                                }}
                                                autoFocus={i === 0}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <button onClick={() => setStep('PHONE')} className="text-gray-400 hover:text-black">Incorrect Number?</button>
                                        <button className="text-[#25D366] font-bold">Resend in 30s</button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleVerifyOTP}
                                    disabled={otp.length < 6 || isLoading}
                                    className={`w-full py-4 text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-lg ${otp.length === 6 && !isLoading
                                            ? 'bg-black text-white hover:bg-gray-800 hover:shadow-black/20 cursor-pointer active:scale-95'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    {isLoading ? 'Verifying...' : 'Verify & Login'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
