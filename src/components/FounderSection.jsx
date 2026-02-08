import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import founderImage from '../assets/founder.png';

const FounderSection = () => {
    return (
        <section className="bg-[#FAF9F6] py-10 md:py-12 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A021]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A021]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Image (Portrait aspect to fit face) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-5/12 lg:w-4/12 relative"
                    >
                        <div className="relative p-3 border border-[#C5A021]/30 rounded-t-[100px] rounded-b-sm">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[90px] rounded-b-sm shadow-2xl">
                                <img
                                    src={founderImage}
                                    alt="Mayank Arora - Founder"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay gradient for better text contrast if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl rounded-full border border-gray-100 hidden md:block">
                            <Quote size={24} className="text-[#C5A021] fill-[#C5A021]" />
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12 lg:w-8/12 text-center md:text-left space-y-8"
                    >
                        <div className="space-y-4">
                            <h4 className="text-[#C5A021] text-xs font-bold tracking-[0.3em] uppercase">
                                The Visionary
                            </h4>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                                "We are not just selling clothes; we are <span className="italic text-[#C5A021]">reviving</span> a legacy."
                            </h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                            At Bhagwati Creations, our mission goes beyond fashion. We are dedicated to preserving the timeless artistry of India, breathing new life into heritage crafts that have defined our culture for centuries. Every piece tells a story of tradition, woven for the modern connoisseur.
                        </p>

                        <div className="pt-4 flex flex-col md:flex-row items-center gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-serif text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Mayank Arora
                                </h3>
                                <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mt-1">
                                    Founder & Director
                                </p>
                            </div>

                            <div className="h-px w-20 bg-gray-300 hidden md:block"></div>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-black border-b border-black pb-1 text-sm font-bold tracking-[0.2em] uppercase hover:text-[#C5A021] hover:border-[#C5A021] transition-all duration-300"
                            >
                                Read Our Story
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
