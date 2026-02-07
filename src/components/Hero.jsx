import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Brand New "Wide & Attractive" curated images
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1512101131154-1296ac97fe41?q=80&w=2070&auto=format&fit=crop", // Wide Bridal/Cinematic
            title: "Regal Bridal Couture",
            subtitle: "Timeless lehengas crafted for your perfect day.",
            cta: "Shop Bridal",
            link: "/category/bridal",
            align: "center",
            textColor: "text-white"
        },
        {
            image: "https://images.unsplash.com/photo-1550614000-4b9519e09477?q=80&w=2070&auto=format&fit=crop", // Vibrant Pink/Orange Texture
            title: "Vibrant Festive hues",
            subtitle: "Celebrate in style with our colorful festive collection.",
            cta: "View Collection",
            link: "/category/haldi-special",
            align: "left",
            textColor: "text-white"
        },
        {
            image: "https://images.unsplash.com/photo-1622324976451-872f2d9c394c?q=80&w=2070&auto=format&fit=crop", // Elegant Model/Saree
            title: "The Saree Edit",
            subtitle: "Graceful drapes in silk, georgette, and organza.",
            cta: "Explore Sarees",
            link: "/category/sarees",
            align: "right",
            textColor: "text-white"
        },
        {
            image: "https://images.unsplash.com/photo-1596483548232-9c3f8dfa00de?q=80&w=2070&auto=format&fit=crop", // Modern/Chic Red
            title: "Modern Ethnic",
            subtitle: "Contemporary styles for the new generation.",
            cta: "New Arrivals",
            link: "/category/new-arrivals",
            align: "left",
            textColor: "text-white"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[85vh] overflow-hidden bg-gray-900 group">

            {/* Main Slider */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image with Overlay */}
                    <div className="relative w-full h-full">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover object-center filter brightness-[0.85] animate-subtle-zoom"
                            style={{ animation: index === currentSlide ? 'subtleZoom 20s infinite alternate' : 'none' }}
                        />
                        {/* Gradient Overlay for Text Readability - carefully tuned */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${slide.align === 'center'
                            ? 'from-black/70 via-black/20 to-black/40'
                            : 'from-black/60 via-transparent to-black/30'
                            }`}></div>
                    </div>

                    {/* Content Layer */}
                    <div className={`absolute inset-0 flex items-center p-8 md:p-16 ${slide.align === 'left' ? 'justify-start' :
                        slide.align === 'right' ? 'justify-end' :
                            'justify-center text-center'
                        }`}>
                        <div className={`max-w-xl space-y-6 transform transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <div className="flex items-center gap-2 mb-2 opacity-90">
                                <Sparkles size={20} className="text-[#ed2585]" />
                                <span className="text-sm md:text-base uppercase tracking-[0.2em] text-white font-medium">Bhagwati Creations</span>
                            </div>

                            <h2 className={`text-5xl md:text-7xl font-serif font-bold leading-[1.1] drop-shadow-2xl ${slide.textColor}`}>
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-2xl font-light text-gray-200 tracking-wide drop-shadow-lg max-w-lg">
                                {slide.subtitle}
                            </p>

                            <div className={`pt-4 ${slide.align === 'right' ? 'flex justify-end' : slide.align === 'center' ? 'flex justify-center' : 'flex justify-start'}`}>
                                <button
                                    onClick={() => navigate(slide.link)}
                                    className="group/btn relative inline-flex items-center gap-3 px-10 py-4 bg-white text-gray-900 rounded-none font-medium tracking-widest uppercase transition-all hover:bg-[#ed2585] hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(237,37,133,0.4)]"
                                >
                                    {slide.cta}
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls (Visible on Hover) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-20 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="pointer-events-auto p-4 rounded-full bg-black/20 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="pointer-events-auto p-4 rounded-full bg-black/20 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Modern Progress Bars */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ease-out shadow-sm ${index === currentSlide ? 'w-16 bg-[#ed2585]' : 'w-4 bg-white/40 hover:bg-white'
                            }`}
                    />
                ))}
            </div>

            <style>{`
                @keyframes subtleZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.1); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
