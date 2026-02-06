import React from 'react';
import heroImage from '../assets/hero_fixed_text.png';

const Hero = () => {
    return (
        <section className="relative w-full bg-gray-50 flex items-center justify-center">
            {/* Image Container - Natural Height */}
            <div className="relative w-full">
                <img
                    src={heroImage}
                    alt="Hero Banner"
                    className="w-full h-auto object-contain max-h-screen mx-auto"
                />
            </div>
        </section>
    );
};
export default Hero;
