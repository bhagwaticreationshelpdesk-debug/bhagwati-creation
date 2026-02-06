import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/fabric_collection_hero.png';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-gray-900 flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={heroBg}
                    alt="Luxury Indian Fabric Collection"
                    className="w-full h-full object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>

            {/* Content using Playfair Display for premium feel */}
            <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
                <span className="block text-pink-400 tracking-[0.2em] text-sm md:text-base uppercase font-medium mb-4">
                    Welcome to Bhagwati Creations
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-serif italic">
                    The Perfect <span className="text-pink-400 not-italic">Indian Fabric</span> Collection
                </h1>

                <p className="text-gray-200 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                    Your Journey Through Designer Fabrics. Discover the elegance of tradition woven with modern luxury.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => navigate('/category/fabric-collection')}
                        className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-pink-600/30 min-w-[200px]"
                    >
                        Explore Collection
                    </button>
                    <button
                        onClick={() => navigate('/new-arrivals')}
                        className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all min-w-[200px]"
                    >
                        View New Arrivals
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default Hero;
