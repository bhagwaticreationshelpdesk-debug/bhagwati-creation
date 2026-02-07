import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png'; // Updated to correct file name

const Hero = () => {
    return (
        <section className="relative bg-[#FDFBF7] min-h-[85vh] flex items-center overflow-hidden">

            {/* Background Texture & Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FFF8E1] via-[#FFF5D1] to-[#FDFBF7] opacity-80"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

                {/* Gold Accent Circles */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border border-[var(--accent-gold)]/10 animate-spin-slow"></div>
                <div className="absolute top-[-5%] right-[-2%] w-[400px] h-[400px] rounded-full border border-[var(--accent-gold)]/20 animate-spin-reverse-slow"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content - Typography */}
                    <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 pt-10 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 text-[var(--accent-gold)] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                <Sparkles size={14} />
                                <span>The Face of Elegance</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--text-primary)] leading-[1.1]">
                                <span className="block" style={{ fontFamily: 'Playfair Display' }}>Bhagwati</span>
                                <span className="block text-4xl md:text-6xl text-[var(--accent-gold)] italic mt-2" style={{ fontFamily: 'Cinzel Decorative' }}>Creation</span>
                            </h1>

                            <p className="text-gray-600 text-lg md:text-xl font-light max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed">
                                Curating the finest ethnic wear with a personal touch. Experience the tradition of luxury and the warmth of genuine craftsmanship.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
                                <Link to="/category/new-arrivals" className="btn-gold px-10 py-4 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-[var(--accent-gold)]/20 transition-all group">
                                    <span>Refine Your Style</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="px-10 py-4 border border-gray-300 rounded-full font-medium text-gray-600 hover:bg-white hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all bg-white/50 backdrop-blur-sm">
                                    Meet the Creator
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - The "Face Value" Image */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[600px]"
                        >
                            {/* Decorative Frame Behind */}
                            <div className="absolute inset-0 border-2 border-[var(--accent-gold)]/30 rounded-t-[10rem] transform translate-x-4 translate-y-4"></div>

                            {/* Main Image Container */}
                            <div className="absolute inset-0 bg-[var(--accent-gold)]/5 rounded-t-[10rem] overflow-hidden shadow-2xl">
                                {/* This is where the user's photo goes. 
                                    Using a placeholder/fallback logic if the file isn't there yet would be standard, 
                                    but for now we assume they will put the file there. */}
                                <img
                                    src={ownerImage}
                                    alt="Bhagwati Creation Owner"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                                        e.target.parentElement.classList.add('grayscale'); // visual indicator it's a fallback
                                    }}
                                />

                                {/* Gradient Overlay for text readability at bottom if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-2xl max-w-[200px] border border-gray-100 hidden md:block"
                            >
                                <p className="font-serif text-2xl text-[var(--accent-gold)] font-bold">100%</p>
                                <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">Authentic & Original</p>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Bottom Scroller Text */}
            <div className="absolute bottom-0 w-full overflow-hidden py-4 bg-[var(--accent-gold)]/5 border-t border-[var(--accent-gold)]/10">
                <div className="whitespace-nowrap animate-marquee flex gap-12 text-[var(--accent-gold)]/40 font-serif text-4xl italic">
                    <span>Bhagwati Expression</span>
                    <span>•</span>
                    <span>Timeless Elegance</span>
                    <span>•</span>
                    <span>Royal Couture</span>
                    <span>•</span>
                    <span>Bhagwati Expression</span>
                    <span>•</span>
                    <span>Timeless Elegance</span>
                    <span>•</span>
                    <span>Royal Couture</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
