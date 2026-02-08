import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X } from 'lucide-react';
import loginBanner from '../assets/login_banner.png';
import { LogoIcon } from './Branding';

const LoginModal = ({ isOpen, onClose }) => {
    const [userPhoneNumber, setPhoneNumber] = useState(''); // Renamed to avoid confusion if needed, or keep standard
    const [phoneNumber, setPhoneNumberState] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState('PHONE'); // 'PHONE' | 'OTP'
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useShop();

    if (!isOpen) return null;

    // Helper to keep phone number state syncing clean
    const setPhoneNumber = (val) => {
        setPhoneNumberState(val);
    };

    const handleRequestOTP = () => {
        if (phoneNumber.length === 10) {
            setIsLoading(true);
            // Simulate API Call
            setTimeout(() => {
                setIsLoading(false);
                setStep('OTP');
                // Auto-focus logic handled in render via 'autoFocus' or ref in ideal world
            }, 1500);
        } else {
            alert("Please enter a valid phone number");
        }
    };

    const handleVerifyOTP = () => {
        if (otp.length === 6) {
            setIsLoading(true);
            // Simulate Verification
            setTimeout(() => {
                setIsLoading(false);
                login();
                onClose();
                // Reset state
                setStep('PHONE');
                setOtp('');
                setPhoneNumber('');
                alert("Logged in successfully!");
            }, 1500);
        } else {
            alert("Please enter a valid 6-digit OTP");
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
                <div className="w-full md:w-1/2 bg-[#FCFAFA] p-8 md:p-12 flex flex-col relative items-center justify-center">
                    {/* Close Button Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-[var(--accent-gold)] transition-all hover:rotate-90 duration-300"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full flex flex-col items-center max-w-sm">
                        {/* Logo */}
                        <div className="mb-8 transform hover:scale-110 transition-transform cursor-pointer">
                            <LogoIcon scale={1.2} />
                        </div>

                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2 tracking-widest uppercase">
                                {step === 'PHONE' ? 'Namaste' : 'Verify OTP'}
                            </h3>
                            <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-bold">
                                {step === 'PHONE' ? 'LOGIN / SIGN UP TO PROCEED' : `SENT TO +91 ${phoneNumber}`}
                            </p>
                        </div>

                        {/* Step 1: Phone Number Input */}
                        {step === 'PHONE' && (
                            <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-2 relative">
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Phone Number</label>
                                    <div className="flex border-b-2 border-gray-200 focus-within:border-[var(--accent-gold)] transition-all duration-300 pb-2 relative z-10">
                                        <div className="px-1 py-2 flex items-center gap-3 select-none">
                                            <span className="text-lg">🇮🇳</span>
                                            <span className="text-gray-900 font-bold text-sm">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone-input"
                                            className="flex-1 bg-transparent px-2 py-2 outline-none text-gray-900 font-medium text-lg placeholder:text-gray-300 tracking-wide"
                                            placeholder="Enter your number"
                                            value={phoneNumber}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                setPhoneNumber(val);
                                            }}
                                            maxLength={10}
                                            autoFocus
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleRequestOTP}
                                    disabled={phoneNumber.length < 10 || isLoading}
                                    className={`w-full py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 ${phoneNumber.length === 10 && !isLoading
                                        ? 'bg-[var(--accent-gold)] text-white hover:bg-[#b08d1e] shadow-[var(--accent-gold)]/20 cursor-pointer'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Request OTP'
                                    )}
                                </button>

                                <div className="relative flex items-center justify-center py-2">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <span className="relative bg-[#FCFAFA] px-4 text-[10px] text-gray-400 font-bold tracking-widest uppercase">OR</span>
                                </div>

                                <button
                                    onClick={() => {
                                        login();
                                        onClose();
                                        alert("Logged in with Google successfully!");
                                    }}
                                    className="w-full py-4 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm font-bold flex items-center justify-center gap-3 transition-all duration-300 group shadow-sm hover:shadow-md"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    <span className="uppercase tracking-wider text-xs font-bold group-hover:text-black">Continue with Google</span>
                                </button>
                            </div>
                        )}

                        {/* Step 2: OTP Input */}
                        {step === 'OTP' && (
                            <div className="w-full space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-4">
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Enter 6-Digit Code</label>
                                    <div className="flex justify-between gap-2">
                                        {[0, 1, 2, 3, 4, 5].map((index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength={1}
                                                className="w-10 h-12 md:w-12 md:h-14 border-2 border-gray-200 rounded-lg text-center text-xl font-bold focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)] outline-none transition-all"
                                                value={otp[index] || ''}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/\D/g, '');
                                                    // Handle backspace when input is empty, or inputting a digit
                                                    if (!val && !otp[index] && e.nativeEvent.inputType === 'deleteContentBackward') {
                                                        const newOtp = otp.split('');
                                                        newOtp[index] = '';
                                                        setOtp(newOtp.join(''));
                                                        if (e.target.previousElementSibling) {
                                                            e.target.previousElementSibling.focus();
                                                        }
                                                        return;
                                                    }

                                                    if (val) { // Only update if a digit is entered
                                                        const newOtp = otp.split('');
                                                        newOtp[index] = val;
                                                        setOtp(newOtp.join('').slice(0, 6));

                                                        // Auto-focus next input
                                                        if (e.target.nextElementSibling) {
                                                            e.target.nextElementSibling.focus();
                                                        }
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Backspace' && !otp[index] && e.target.previousElementSibling) {
                                                        e.target.previousElementSibling.focus();
                                                    }
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center text-xs px-1">
                                        <button
                                            onClick={() => {
                                                setStep('PHONE');
                                                setOtp(''); // Clear OTP when changing number
                                            }}
                                            className="text-gray-400 hover:text-gray-600 font-medium"
                                        >
                                            Change Number
                                        </button>
                                        <button className="text-[var(--accent-gold)] font-bold hover:underline">
                                            Resend OTP
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleVerifyOTP}
                                    disabled={otp.length < 6 || isLoading}
                                    className={`w-full py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 ${otp.length === 6 && !isLoading
                                        ? 'bg-[var(--accent-gold)] text-white hover:bg-[#b08d1e] shadow-[var(--accent-gold)]/20 cursor-pointer'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                                            Verifying...
                                        </>
                                    ) : (
                                        'Verify & Login'
                                    )}
                                </button>
                            </div>
                        )}

                        {/* Footer Terms */}
                        <div className="mt-8 text-center text-[10px] text-gray-400 font-medium leading-relaxed tracking-wider">
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
