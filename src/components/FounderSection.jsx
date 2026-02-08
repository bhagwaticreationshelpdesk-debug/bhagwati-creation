import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import founderImage from '../assets/founder.png';

const FounderSection = () => {
    return (
        <section className="bg-[#FAF9F6] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                            <img
                                src={founderImage}
                                alt="Mayank Arora - Founder"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 text-center md:text-left space-y-8"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#C5A021] leading-tight tracking-wide">
                            BHAGWATI CREATIONS IS A BRAND WORKING TO <span className="font-bold">REVIVE HERITAGE CRAFTS</span> FROM ACROSS INDIA
                        </h2>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-gray-900 tracking-widest uppercase">
                                MAYANK ARORA
                            </h3>
                            <p className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">
                                FOUNDER & DIRECTOR
                            </p>
                        </div>

                        <Link
                            to="/about"
                            className="inline-block bg-[#C5A021] text-white text-sm font-bold px-8 py-3 tracking-[0.15em] uppercase hover:bg-black transition-colors duration-300"
                        >
                            About Us
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
