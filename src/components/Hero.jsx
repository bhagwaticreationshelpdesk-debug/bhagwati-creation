import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1512101131154-1296ac97fe41?q=80&w=2070&auto=format&fit=crop",
            brandTag: "BHAGWATI CREATIONS",
            title: "Royal Silk Heritage",
            subtitle: "Exquisite hand-woven sarees that define timeless elegance.",
            cta: "Shop Collection",
            link: "/category/sarees"
        },
        {
            image: "https://images.unsplash.com/photo-1610030469617-3f3bb6ce7bc6?q=80&w=2070&auto=format&fit=crop",
            brandTag: "BRIDAL EXCLUSIVE",
            title: "Regal Heritage",
            subtitle: "Discover our handcrafted bridal lehengas of unmatched grace.",
            cta: "View Bridal",
            link: "/category/bridal"
        },
        {
            image: "https://images.unsplash.com/photo-1622324976451-872f2d9c394c?q=80&w=2070&auto=format&fit=crop",
            brandTag: "NEW ARRIVALS",
            title: "The Saree Edit",
            subtitle: "Contemporary drapes in silk, georgette, and organza.",
            cta: "Explore Now",
            link: "/category/sarees"
        },
        {
            image: "https://images.unsplash.com/photo-1596483548232-9c3f8dfa00de?q=80&w=2070&auto=format&fit=crop",
            brandTag: "FESTIVE 2026",
            title: "Modern Muse",
            subtitle: "Striking silhouettes for the confident modern woman.",
            cta: "Shop Festive",
            link: "/category/new-arrivals"
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
        <section className="relative w-full h-[100vh] overflow-hidden bg-black group">

            {/* Image Slider - Full Screen Wide Rectangular */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Soft Gradient Overlay for Readability - Not too dark */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex items-center">
                <div className="max-w-3xl">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${index === currentSlide ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-10 hidden'
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles size={20} className="text-[#ed2585]" />
                                <span className="text-[#ed2585] font-bold tracking-[0.3em] uppercase text-sm">
                                    {slide.brandTag}
                                </span>
                            </div>

                            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-none mb-6">
                                {slide.title}
                            </h1>

                            <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
                                {slide.subtitle}
                            </p>

                            <button
                                onClick={() => navigate(slide.link)}
                                className="group relative inline-flex items-center gap-4 bg-[#ed2585] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-[#ed2585]"
                            >
                                {slide.cta}
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 bg-[#ed2585]' : 'w-4 bg-white/40 hover:bg-white'
                            }`}
                    />
                ))}
            </div>

            {/* Left/Right Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-20 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="pointer-events-auto p-3 rounded-full bg-black/30 text-white border border-white/20 hover:bg-[#ed2585] transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="pointer-events-auto p-3 rounded-full bg-black/30 text-white border border-white/20 hover:bg-[#ed2585] transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

        </section>
    );
};

export default Hero;
