import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '../assets/hero_ultra_wide_final.png';

const Hero = () => {
    return (
        <section className="relative w-full bg-gray-50 flex items-center justify-center overflow-hidden">
            {/* Image Container - Natural Height */}
            <div className="relative w-full opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]">
                <img
                    src={heroImage}
                    alt="Hero Banner"
                    className="w-full h-auto object-contain max-h-screen mx-auto"
                />

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="text-xs uppercase tracking-widest mb-1 font-light">Explore</span>
                    <ChevronDown size={24} />
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};
export default Hero;
