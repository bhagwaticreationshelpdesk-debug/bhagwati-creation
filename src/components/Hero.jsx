import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1622324976451-872f2d9c394c?q=80&w=2070&auto=format&fit=crop",
            brandTag: "BHAGWATI CREATIONS",
            title: "The Saree Edit",
            subtitle: "Exquisite drapes in pure silk, georgette, and organza. Timeless elegance redefined.",
            cta: "Shop The Edit",
            link: "/category/sarees",
            align: "left",
            theme: "dark"
        },
        {
            image: "https://images.unsplash.com/photo-1610030469617-3f3bb6ce7bc6?q=80&w=2070&auto=format&fit=crop",
            brandTag: "WEDDING COLLECTION",
            title: "Regal Heritage",
            subtitle: "Handcrafted bridal lehengas that tell a story of tradition and luxury.",
            cta: "Explore Bridal",
            link: "/category/bridal",
            align: "right",
            theme: "dark"
        },
        {
            image: "https://images.unsplash.com/photo-1596483548232-9c3f8dfa00de?q=80&w=2070&auto=format&fit=crop",
            brandTag: "FESTIVE 2026",
            title: "Modern Muse",
            subtitle: "Contemporary silhouettes for the confident modern woman.",
            cta: "View Arrivals",
            link: "/category/new-arrivals",
            align: "center",
            theme: "dark"
        },
        {
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&auto=format&fit=crop",
            brandTag: "BHAGWATI SIGNATURE",
            title: "Artisanal Grace",
            subtitle: "Where every thread weave a legacy of unmatched craftsmanship.",
            cta: "Discover More",
            link: "/category/sale",
            align: "left",
            theme: "dark"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // 4 seconds as requested
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[650px] md:h-[750px] lg:h-[90vh] overflow-hidden bg-black group font-sans">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
                        />
                        {/* Dynamic Gradient based on alignment */}
                        <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60`}></div>
                        {slide.align === 'left' && <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>}
                        {slide.align === 'right' && <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent"></div>}
                        {slide.align === 'center' && <div className="absolute inset-0 bg-black/30 backdrop-grad"></div>}
                    </div>
                ))}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full container mx-auto px-6 md:px-12 flex items-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center px-6 md:px-12 transition-all duration-1000 ease-out ${index === currentSlide
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 translate-y-12 pointer-events-none'
                            } ${slide.align === 'center' ? 'justify-center text-center' :
                                slide.align === 'right' ? 'justify-end text-right' : 'justify-start text-left'
                            }`}
                    >
                        <div className="max-w-3xl">
                            {/* Brand Tag - Contrasting Element */}
                            <div className={`mb-6 flex items-center gap-3 ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                                <div className="h-[1px] w-8 bg-[#ed2585]"></div>
                                <span className="text-[#ed2585] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                                    {slide.brandTag}
                                </span>
                                <Sparkles size={16} className="text-[#ed2585] animate-pulse" />
                            </div>

                            {/* Main Title - Serif for Luxury */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl">
                                {slide.title.split(' ').map((word, i) => (
                                    <span key={i} className={i === 1 ? 'block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : ''}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-gray-200 font-light mb-10 max-w-xl mx-auto md:mx-0 tracking-wide leading-relaxed drop-shadow-lg">
                                {slide.subtitle}
                            </p>

                            {/* CTA Button */}
                            <div className={`flex ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                                <button
                                    onClick={() => navigate(slide.link)}
                                    className="group relative overflow-hidden bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:text-white"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        {slide.cta}
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                    <div className="absolute inset-0 bg-[#ed2585] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm group/nav"
                >
                    <ChevronLeft size={24} className="group-hover/nav:-translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm group/nav"
                >
                    <ChevronRight size={24} className="group-hover/nav:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Progress/Index Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-end gap-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className="group flex flex-col items-center gap-2"
                    >
                        <span className={`text-[10px] font-bold transition-all duration-300 ${index === currentSlide ? 'text-[#ed2585] opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'
                            }`}>
                            0{index + 1}
                        </span>
                        <div className={`h-[2px] transition-all duration-500 ease-out bg-current ${index === currentSlide ? 'w-16 text-[#ed2585]' : 'w-8 text-white/30 hover:text-white'
                            }`} />
                    </button>
                ))}
            </div>

            {/* Side Branding / Vertical Text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 vertical-text hidden lg:flex flex-col items-center gap-8 opacity-40 select-none">
                <div className="h-32 w-[1px] bg-white"></div>
                <span className="text-white text-xs tracking-[1em] uppercase whitespace-nowrap -rotate-90 origin-center py-10">
                    ESTABLISHED 2024 • BHAGWATI CREATIONS
                </span>
                <div className="h-32 w-[1px] bg-white"></div>
            </div>

            <style>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
