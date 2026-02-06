import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png';
import { ArrowUpRight, Star } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#050505] via-[#1a0b12] to-[#2d0f18] overflow-hidden flex flex-col justify-center text-white">

            {/* Background Marquee Text (Subtle Opacity) */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.05] pointer-events-none select-none overflow-hidden whitespace-nowrap z-0">
                <h1 className="text-[20vw] font-serif font-black text-white leading-none animate-marquee">
                    ROYAL • HERITAGE • LUXURY • ELEGANCE •
                </h1>
            </div>

            {/* Overlay Gradient for easier reading */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#ed2585]/20 via-transparent to-transparent z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col lg:flex-row items-center pt-20">

                {/* Center/Left Content */}
                <div className="w-full lg:w-3/5 pt-12 lg:pt-0 z-20">
                    <div className="space-y-6 md:space-y-8">

                        <div className="inline-flex items-center gap-3 border-b border-white/20 pb-2">
                            <span className="text-gray-300 font-medium tracking-widest text-xs uppercase">Est. 2020</span>
                            <div className="w-1 h-1 bg-[#ed2585] rounded-full"></div>
                            <span className="text-gray-300 font-medium tracking-widest text-xs uppercase">New Delhi</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl xl:text-[7rem] font-serif text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                            Indian <br />
                            <span className="italic font-light text-[#ed2585]">Heritage</span> <br />
                            Revived.
                        </h1>

                        <p className="max-w-lg text-lg text-gray-300 font-light leading-relaxed border-l-2 border-[#ed2585] pl-6 bg-black/20 backdrop-blur-sm p-4 rounded-r-xl">
                            Experience the grandeur of handwoven fabrics. A curated collection where every thread tells a story of royalty, grace, and timeless beauty.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => navigate('/category/fabric-collection')}
                                className="group relative px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Collection <ArrowUpRight size={18} />
                                </span>
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-transparent text-white border border-white/30 font-medium tracking-wide uppercase text-sm hover:bg-[#ed2585] hover:border-[#ed2585] transition-all duration-300 backdrop-blur-sm"
                            >
                                Visit Our Store
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-2/5 relative h-[500px] lg:h-[800px] mt-12 lg:mt-0 flex items-end justify-center lg:justify-end perspective-1000">

                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-10 w-64 h-64 bg-[#ed2585] rounded-full blur-[100px] opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>

                    {/* Main Image Container */}
                    <div className="relative z-10 w-full max-w-md lg:max-w-full h-full flex flex-col justify-end">
                        <div className="relative w-full h-[90%] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">

                            {/* Image Gradient Fade at Bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 h-[30%] bottom-0"></div>

                            <img
                                src={ownerImage}
                                alt="Anmol Gupta - Founder"
                                className="w-full h-full object-cover object-top lg:object-center mask-image-gradient drop-shadow-2xl brightness-110"
                                style={{
                                    borderTopLeftRadius: '200px',
                                    borderTopRightRadius: '200px',
                                }}
                            />

                            {/* Floating "Authentic" Badge */}
                            <div className="absolute top-0 -left-[5%] lg:-left-[10%] z-30">
                                <div className="relative w-32 h-32 flex items-center justify-center bg-black/80 backdrop-blur-md rounded-full shadow-2xl animate-spin-slow border border-white/10">
                                    <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text fontSize="11" fontWeight="bold" letterSpacing="2">
                                            <textPath href="#circle" className="uppercase fill-white">
                                                Bhagwati Creations • Authentic •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <Star className="text-[#ed2585] fill-[#ed2585]" size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Strip (Glass) */}
            <div className="hidden lg:flex absolute bottom-0 right-0 w-2/5 bg-white/5 backdrop-blur-md py-6 px-12 justify-between border-t border-white/10 z-30">
                <div>
                    <h4 className="text-2xl font-serif font-bold text-white">50+</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Bridal Sets</p>
                </div>
                <div>
                    <h4 className="text-2xl font-serif font-bold text-white">100%</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Handmade</p>
                </div>
                <div>
                    <h4 className="text-2xl font-serif font-bold text-white">4.9</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Rating</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
