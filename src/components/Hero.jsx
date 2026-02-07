import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1610030469668-935142764ee6?q=80&w=2070&auto=format&fit=crop", // Vibrant Red/Gold Look
            brandTag: "BHAGWATI CREATIONS",
            title: "Royal Silk Heritage",
            subtitle: "Drape yourself in the finest hand-woven threads of tradition.",
            cta: "Shop Silk",
            link: "/category/sarees",
            align: "left"
        },
        {
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2070&auto=format&fit=crop", // Vibrant Yellow/Red Patterns
            brandTag: "BRIDAL EXCLUSIVE",
            title: "Regal Bridal Edits",
            subtitle: "Exquisite lehengas designed for your most unforgettable moments.",
            cta: "View Collection",
            link: "/category/bridal",
            align: "right"
        },
        {
            image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2070&auto=format&fit=crop", // Striking Blue/Silver
            brandTag: "LUXURY FESTIVE",
            title: "The Modern Muse",
            subtitle: "Contemporary silhouettes blended with timeless artisanal grace.",
            cta: "Explore Now",
            link: "/category/new-arrivals",
            align: "left"
        },
        {
            image: "https://images.unsplash.com/photo-1621285853634-713b8dd6b590?q=80&w=2071&auto=format&fit=crop", // Close-up detail / Rich color
            brandTag: "BHAGWATI SIGNATURE",
            title: "Artisanal Grace",
            subtitle: "Every masterpiece is a testament to our legacy of craftsmanship.",
            cta: "Discover More",
            link: "/category/sale",
            align: "center"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[600px] md:h-[750px] lg:h-[90vh] overflow-hidden bg-black group">

            {/* Background Image Container */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
                                }`}
                        />
                        {/* High Contrast Overlay Logic */}
                        <div className={`absolute inset-0 bg-black/30 bg-gradient-to-r ${slide.align === 'left' ? 'from-black/80 via-black/40 to-transparent' :
                                slide.align === 'right' ? 'from-transparent via-black/40 to-black/80' :
                                    'from-black/60 via-transparent to-black/60'
                            }`}></div>
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full container mx-auto px-6 md:px-12 flex items-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center px-6 md:px-12 transition-all duration-700 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
                            } ${slide.align === 'left' ? 'justify-start text-left' :
                                slide.align === 'right' ? 'justify-end text-right' : 'justify-center text-center'
                            }`}
                    >
                        <div className="max-w-3xl">
                            {/* Brand Tag - Mixture of Brand Name and Theme */}
                            <div className={`flex items-center gap-3 mb-6 ${slide.align === 'left' ? 'justify-start' :
                                    slide.align === 'right' ? 'justify-end' : 'justify-center'
                                }`}>
                                <span className="text-[#ed2585] font-bold tracking-[0.3em] uppercase text-xs md:text-sm flex items-center gap-2">
                                    <Sparkles size={16} /> {slide.brandTag}
                                </span>
                            </div>

                            {/* Title - High Contrast Bold Serif */}
                            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-none mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                                {slide.title}
                            </h1>

                            {/* Subtitle - Contrasting Modern Text */}
                            <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide">
                                {slide.subtitle}
                            </p>

                            {/* CTA Link - Premium Style */}
                            <div className={`flex ${slide.align === 'left' ? 'justify-start' :
                                    slide.align === 'right' ? 'justify-end' : 'justify-center'
                                }`}>
                                <button
                                    onClick={() => navigate(slide.link)}
                                    className="group relative px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest transition-all hover:bg-[#ed2585] hover:text-white"
                                >
                                    <span className="flex items-center gap-3">
                                        {slide.cta} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-[#ed2585]' : 'w-6 bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Left/Right Controls */}
            <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Vertical Branding Detail */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block z-30">
                <span className="text-white/20 text-[10px] uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
                    Luxury Ethnic Wear • Established 2024
                </span>
            </div>

        </section>
    );
};

export default Hero;
