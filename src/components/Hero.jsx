import React from 'react';
import { useNavigate } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#FAF9F6]">

            {/* 1. Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#FFF5E1] to-[#FFE4E1] rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FFE4E6] to-transparent rounded-full blur-[80px] opacity-60 -translate-x-1/4 translate-y-1/4"></div>

                {/* Fine Grid/Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 h-full py-12 lg:py-0">

                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm animate-fade-in">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                        </span>
                        <span className="text-[#1F2937] text-xs md:text-sm font-bold tracking-widest uppercase">The Founder's Edit</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-serif font-medium text-[#111827]">
                        Crafting <br />
                        <span className="italic text-[#db2777] relative inline-block">
                            Elegance
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#db2777] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z" fill="currentColor" />
                            </svg>
                        </span>
                        <br /> with Soul.
                    </h1>

                    <p className="text-lg md:text-xl text-[#4B5563] max-w-lg font-light leading-relaxed">
                        Discover the finest handpicked ethnic wear, curated personally to bring out your
                        <span className="font-semibold text-[#111827]"> royal essence.</span>
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button
                            onClick={() => navigate('/category/fabric-collection')}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#111827] text-white rounded-full text-lg font-medium transition-all hover:bg-black hover:scale-105 shadow-lg shadow-gray-200"
                        >
                            Shop Now
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex items-center gap-6 text-[#6B7280]">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold overflow-hidden`}>
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-full h-full" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-pink-50 text-pink-600 flex items-center justify-center text-xs font-bold">
                                +2k
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-[#111827]">Trusted by 2,000+</p>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>

                {/* Right: Hero Image Composition */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <div className="relative z-10 w-[300px] md:w-[450px]">

                        {/* Abstract Shapes behind */}
                        <div className="absolute top-10 right-10 w-full h-full bg-[#fce7f3] rounded-tl-[100px] rounded-br-[40px] -z-10 transform translate-x-4 translate-y-4"></div>
                        <div className="absolute top-0 right-0 w-full h-full border-2 border-[#111827] rounded-tl-[100px] rounded-br-[40px] -z-10"></div>

                        {/* Main Image */}
                        <div className="relative rounded-tl-[100px] rounded-br-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={ownerImage}
                                alt="Bhagwati Creations Founder"
                                className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-pink-600 uppercase tracking-wider">The Visionary</p>
                                        <h3 className="text-lg font-serif font-bold text-[#111827]">Anmol Gupta</h3>
                                    </div>
                                    <div className="bg-[#111827] text-white p-2 rounded-full">
                                        <Sparkles size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Right Decoration */}
                        <div className="absolute -top-6 -right-6 bg-yellow-400 text-[#111827] font-bold py-4 px-4 rounded-full shadow-lg transform rotate-12 animate-bounce-slow text-center text-xs md:text-sm">
                            <span className="block text-lg">100%</span>
                            Premium
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
