import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png';
import { ArrowUpRight, Star } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[85vh] bg-[#FFF8F0] overflow-hidden flex flex-col justify-center">

            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Top Marquee (High Contrast) */}
            <div className="absolute top-0 left-0 w-full bg-[#ed2585] text-white py-1 z-20 overflow-hidden hidden md:block">
                <div className="animate-marquee whitespace-nowrap text-xs font-bold tracking-[0.2em] uppercase">
                    &nbsp;&nbsp;•&nbsp;&nbsp; Authenticity Guaranteed &nbsp;&nbsp;•&nbsp;&nbsp; Handpicked Fabrics &nbsp;&nbsp;•&nbsp;&nbsp; Premium Quality &nbsp;&nbsp;•&nbsp;&nbsp; Worldwide Shipping &nbsp;&nbsp;•&nbsp;&nbsp;
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col lg:flex-row items-center pt-8 md:pt-0">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 pt-12 lg:pt-0 z-20 lg:pr-12">
                    <div className="space-y-8 text-center lg:text-left">

                        <div className="inline-flex items-center gap-4 justify-center lg:justify-start">
                            <span className="w-12 h-[1px] bg-gray-400"></span>
                            <span className="text-gray-500 font-semibold tracking-[0.2em] text-xs uppercase">Since 2020</span>
                            <span className="w-12 h-[1px] bg-gray-400"></span>
                        </div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-gray-900 leading-[1.1] tracking-tight">
                            Timeless <br />
                            <span className="relative inline-block text-[#ed2585] italic font-medium px-2">
                                Elegance
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#ed2585]/10 -z-10 rounded-full"></span>
                            </span> <br />
                            For You.
                        </h1>

                        <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            Discover an exclusive collection of heavy suits and premium fabrics, handpicked to redefine your ethnic wardrobe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <button
                                onClick={() => navigate('/category/fabric-collection')}
                                className="px-10 py-4 bg-gray-900 text-white rounded-full font-medium tracking-wide uppercase shadow-lg hover:bg-black hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                Shop Collection <ArrowUpRight size={18} />
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-4 bg-transparent text-gray-900 border border-gray-300 rounded-full font-medium tracking-wide uppercase hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                            >
                                Visit Store
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex flex-col items-center lg:items-start gap-1">
                                <h4 className="font-bold text-2xl text-gray-900">20k+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Customers</p>
                            </div>
                            <div className="w-[1px] h-10 bg-gray-300"></div>
                            <div className="flex flex-col items-center lg:items-start gap-1">
                                <h4 className="font-bold text-2xl text-gray-900">4.9/5</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Top Rated</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">

                    {/* Background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#ffe4e6] to-[#fce7f3] rounded-full blur-[80px] opacity-60 z-0"></div>

                    <div className="relative z-10 w-full max-w-sm md:max-w-md">
                        {/* Main Image Frame - Arch Shape */}
                        <div className="relative rounded-t-full rounded-b-[200px] border-[8px] border-white shadow-2xl overflow-hidden bg-white aspect-[3/4]">
                            <img
                                src={ownerImage}
                                alt="Anmol Gupta - Founder"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Founder Tag */}
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <div className="inline-block bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white">
                                    <p className="text-xs font-bold text-[#ed2585] uppercase tracking-widest mb-1">Founder</p>
                                    <p className="text-gray-900 font-serif font-bold text-lg">Anmol Gupta</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Stamp */}
                        <div className="absolute -top-6 -right-6 animate-spin-slow">
                            <div className="relative w-28 h-28 bg-[#ed2585] rounded-full flex items-center justify-center shadow-xl border-4 border-white text-white">
                                <svg className="w-full h-full absolute p-2" viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circle2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text fontSize="11" fontWeight="bold" letterSpacing="1">
                                        <textPath href="#circle2" className="uppercase fill-white">
                                            • Premium Quality • Authentic
                                        </textPath>
                                    </text>
                                </svg>
                                <Star fill="white" size={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
