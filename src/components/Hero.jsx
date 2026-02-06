
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png';
import bgPattern from '../assets/fabric_collection_hero.png';
import { Star, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[750px] flex items-center overflow-hidden bg-[#0a0a0a]">

            {/* 1. Dynamic Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Image Texture */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay">
                    <img src={bgPattern} alt="Texture" className="w-full h-full object-cover grayscale" />
                </div>
                {/* Radial Gradient Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md mx-auto lg:mx-0">
                            <Sparkles size={16} className="text-pink-400" />
                            <span className="text-pink-200 text-xs font-semibold tracking-[0.2em] uppercase">The Royal Collection</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-serif tracking-tight">
                            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200 italic pr-2">Tradition</span>
                            <br /> Meets <span className="italic font-light text-gray-400">Luxury.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Bhagwati Creations brings you an exclusive curation of India's finest fabrics.
                            <span className="text-white font-medium"> handcrafted for the modern soul.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                            <button
                                onClick={() => navigate('/category/fabric-collection')}
                                className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                Shop Collections
                            </button>
                            <button
                                onClick={() => navigate('/new-arrivals')}
                                className="px-10 py-4 bg-transparent border border-gray-600 text-white font-medium rounded-full hover:border-pink-500 hover:text-pink-400 transition-all"
                            >
                                New Arrivals
                            </button>
                        </div>

                        {/* Stats / Trust */}
                        <div className="pt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 mt-8">
                            <div>
                                <h4 className="text-3xl font-serif text-white">5k+</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Happy Clients</p>
                            </div>
                            <div className="h-10 w-[1px] bg-white/10"></div>
                            <div>
                                <h4 className="text-3xl font-serif text-white">100%</h4>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Authentic</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Featured Image */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                        <div className="relative z-10 w-[320px] md:w-[420px] lg:w-[480px]">
                            {/* Glass Card Backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] backdrop-blur-sm border border-white/10 transform rotate-6 translate-x-4 translate-y-4"></div>

                            {/* Main Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
                                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
                                <img
                                    src={ownerImage}
                                    alt="Founder"
                                    className="w-full h-[550px] object-cover object-top"
                                />

                                {/* Image Overlay Info */}
                                <div className="absolute bottom-8 left-8 z-20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-xs text-white/80 font-medium">Top Rated Store</span>
                                    </div>
                                    <p className="text-2xl font-serif text-white italic">"Fashion that speaks."</p>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500 rounded-full blur-[40px] opacity-60"></div>
                            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-purple-500 rounded-full blur-[30px] opacity-60"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

