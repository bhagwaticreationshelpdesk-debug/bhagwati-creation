import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_image.png';

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-gray-900 font-sans group">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src={heroImage}
                        alt="Bhagwati Creations Hero"
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Content Text Overlay - Magazine/Poster Style */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 pointer-events-none">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full relative"
                >
                    {/* 1. Top Left Tag */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-12 left-4 md:left-0 md:top-20 border border-white/40 bg-black/20 backdrop-blur-md px-4 py-1.5"
                    >
                        <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                            New Edition 2024
                        </span>
                    </motion.div>

                    {/* 2. Main Brand Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter drop-shadow-2xl mb-2 relative z-10">
                        <span className="block font-medium italic" style={{ fontFamily: 'Playfair Display' }}>
                            Bhagwati
                        </span>
                        <span className="block text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.4em] uppercase mt-2 md:mt-4 text-[var(--accent-gold)]">
                            Creations
                        </span>
                    </h1>


                    {/* 4. Description */}
                    <div className="space-y-8 max-w-2xl mx-auto pointer-events-auto mt-12">
                        <p className="text-white/90 text-lg md:text-xl font-light drop-shadow-lg leading-relaxed hidden md:block tracking-wide">
                            Discover the new era of ethnic chic with our exclusive collection.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
