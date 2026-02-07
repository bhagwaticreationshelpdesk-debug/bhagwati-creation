import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1512101131154-1296ac97fe41?q=80&w=2070&auto=format&fit=crop",
            tag: "BHAGWATI CREATIONS",
            title: "Royal Silk Heritage",
            subtitle: "Exquisite hand-woven sarees that define timeless elegance.",
            cta: "Shop Collection",
            link: "/category/sarees"
        },
        {
            image: "https://images.unsplash.com/photo-1610030469617-3f3bb6ce7bc6?q=80&w=2070&auto=format&fit=crop",
            tag: "BRIDAL EXCLUSIVE",
            title: "Regal Heritage",
            subtitle: "Discover our handcrafted bridal lehengas of unmatched grace.",
            cta: "View Bridal",
            link: "/category/bridal"
        },
        {
            image: "https://images.unsplash.com/photo-1622324976451-872f2d9c394c?q=80&w=2070&auto=format&fit=crop",
            tag: "NEW ARRIVALS",
            title: "The Saree Edit",
            subtitle: "Contemporary drapes in silk, georgette, and organza.",
            cta: "Explore Now",
            link: "/category/sarees"
        },
        {
            image: "https://images.unsplash.com/photo-1596483548232-9c3f8dfa00de?q=80&w=2070&auto=format&fit=crop",
            tag: "FESTIVE 2026",
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

    return (
        <section className="relative w-full h-[calc(100vh-100px)] md:h-[calc(100vh-120px)] overflow-hidden bg-black">

            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover brightness-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full container mx-auto px-6 flex items-center justify-center text-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles size={20} className="text-[var(--accent-gold)]" />
                            <span className="text-[var(--accent-gold)] font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
                                {slide.tag}
                            </span>
                        </div>

                        <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-serif font-bold leading-tight mb-8 drop-shadow-2xl">
                            {slide.title}
                        </h1>

                        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed tracking-wide">
                            {slide.subtitle}
                        </p>

                        <button
                            onClick={() => navigate(slide.link)}
                            onMouseEnter={() => {
                                // Prefetch the category page component
                                import('../pages/CategoryPage');
                            }}
                            className="btn-gold px-12 py-5"
                        >
                            <span className="flex items-center gap-4">
                                {slide.cta} <ArrowRight size={20} />
                            </span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Progress Bar (Bottom) */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? 'w-16 bg-[var(--accent-gold)]' : 'w-6 bg-white/30'
                            }`}
                    />
                ))}
            </div>

        </section>
    );
};

export default Hero;
