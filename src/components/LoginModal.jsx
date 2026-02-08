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
                                        // 1. Open WhatsApp (Demo) to show functionality
                                        window.open('https://wa.me/', '_blank');

                                        // 2. Simulate Login Success
                                        setIsLoading(true);
                                        setTimeout(() => {
                                            setIsLoading(false);
                                            login();
                                            onClose();
                                        }, 2000);
                                    }}
                                    className="relative z-20 cursor-pointer w-full py-4 border border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366] text-[#075E54] hover:text-white text-sm font-bold flex items-center justify-center gap-3 transition-all duration-300 group shadow-lg hover:shadow-[#25D366]/40 rounded-sm active:scale-95"
                                >
                                    {/* WhatsApp Icon */}
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span className="uppercase tracking-widest text-xs font-bold">Continue with WhatsApp</span>
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
