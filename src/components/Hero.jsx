import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png';
import { ArrowUpRight, Star } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        // Simple parallax or scroll effect can be added here if needed
    }, []);

    return (
        <section className="relative w-full min-h-[85vh] bg-[#FDFBF7] overflow-hidden flex flex-col justify-center">

            {/* Background Marquee Text (Subtle) */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap">
                <h1 className="text-[20vw] font-serif font-black text-black leading-none animate-marquee">
                    LUXURY • TRADITION • ELEGANCE • ROYALTY •
                </h1>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col lg:flex-row items-center">

                {/* Center/Left Content */}
                <div className="w-full lg:w-3/5 pt-12 lg:pt-0 z-20">
                    <div className="space-y-6 md:space-y-8">

                        <div className="inline-flex items-center gap-3 border-b border-black/20 pb-2">
                            <span className="text-black font-medium tracking-widest text-xs uppercase">Est. 2020</span>
                            <div className="w-1 h-1 bg-black rounded-full"></div>
                            <span className="text-black font-medium tracking-widest text-xs uppercase">New Delhi</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif text-[#1a1a1a] leading-[0.9] tracking-tighter">
                            Indian <br />
                            <span className="italic font-light text-[#cf2e2e]">Heritage</span> <br />
                            Revived.
                        </h1>

                        <p className="max-w-md text-lg text-gray-600 font-light leading-relaxed border-l-2 border-[#cf2e2e] pl-6">
                            Experience the grandeur of handwoven fabrics. A collection where every thread tells a story of royalty and grace.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => navigate('/category/fabric-collection')}
                                className="group relative px-8 py-4 bg-[#1a1a1a] text-white rounded-none border border-[#1a1a1a] overflow-hidden transition-all hover:bg-transparent hover:text-[#1a1a1a]"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide uppercase text-sm">
                                    Explore Collection <ArrowUpRight size={18} />
                                </span>
                                <div className="absolute inset-0 bg-[#cf2e2e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-transparent text-[#1a1a1a] border-b border-[#1a1a1a] font-medium tracking-wide uppercase text-sm hover:text-[#cf2e2e] hover:border-[#cf2e2e] transition-colors"
                            >
                                Visit Our Store
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image Section - Breaking the Grid */}
                <div className="w-full lg:w-2/5 relative h-[500px] lg:h-[800px] mt-12 lg:mt-0 flex items-end justify-center lg:justify-end">

                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-10 w-64 h-64 bg-[#fbbf24] rounded-full blur-[80px] opacity-40 mix-blend-multiply"></div>
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#f43f5e] rounded-full blur-[80px] opacity-30 mix-blend-multiply"></div>

                    {/* Main Image Container with Unique Shape */}
                    <div className="relative z-10 w-full max-w-md lg:max-w-full h-full">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent z-10 h-[20%] bottom-0"></div>

                            <img
                                src={ownerImage}
                                alt="Anmol Gupta - Founder"
                                className="w-full h-full object-cover object-top lg:object-center mask-image-gradient"
                                style={{
                                    borderTopLeftRadius: '200px',
                                    borderTopRightRadius: '200px',
                                }}
                            />

                            {/* Floating "Stamp" Badge */}
                            <div className="absolute top-[10%] -left-[10%] lg:-left-[5%] md:block hidden">
                                <div className="relative w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-xl animate-spin-slow">
                                    <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text fontSize="11" fontWeight="bold" letterSpacing="2">
                                            <textPath href="#circle" className="uppercase fill-black">
                                                Bhagwati Creations • Authentic •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <Star className="text-[#cf2e2e] fill-[#cf2e2e]" size={24} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Strip */}
            <div className="hidden lg:flex absolute bottom-0 right-0 w-2/5 bg-white py-6 px-12 justify-between border-t border-gray-100">
                <div>
                    <h4 className="text-2xl font-serif font-bold">50+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Bridal Sets</p>
                </div>
                <div>
                    <h4 className="text-2xl font-serif font-bold">100%</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Handmade</p>
                </div>
                <div>
                    <h4 className="text-2xl font-serif font-bold">4.9</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Rating</p>
                </div>
            </div>

        </section>
    );
};

export default Hero;
