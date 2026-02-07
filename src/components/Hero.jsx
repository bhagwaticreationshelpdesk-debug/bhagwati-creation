import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1610030469668-935142764ee6?q=80&w=2070&auto=format&fit=crop",
            tag: "The Heritage Edit",
            title: "Regal Weaves",
            subtitle: "Discover the artistry of hand-woven silk, curated for the modern ethnic connoisseur.",
            cta: "Shop Collections",
            link: "/category/all-collections",
            align: "split"
        },
        {
            image: "https://images.unsplash.com/photo-1540206395-6880f94933af?q=80&w=2072&auto=format&fit=crop",
            tag: "Bridal Signature",
            title: "Ethereal Grace",
            subtitle: "Timed-honored lehengas that weave a story of your unforgettable journey.",
            cta: "Bridal Catalog",
            link: "/category/bridal",
            align: "center"
        },
        {
            image: "https://images.unsplash.com/photo-1622324976451-872f2d9c394c?q=80&w=2070&auto=format&fit=crop",
            tag: "Modern Ethnic",
            title: "Saree Soirée",
            subtitle: "An elegant blend of contemporary cuts and traditional drapes.",
            cta: "Explore Sarees",
            link: "/category/sarees",
            align: "right"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative w-full h-[calc(100vh-100px)] lg:h-[calc(100vh-140px)] bg-[var(--bg-dark)] overflow-hidden">

            {/* Base Image Container */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) ${index === currentSlide ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-20'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.2]"
                        />
                        {/* Artistic Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-dark)]/80 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                ))}
            </div>

            {/* Content Layer */}
            <div className="relative h-full container mx-auto px-6 md:px-12 flex items-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center px-6 md:px-12 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            } ${slide.align === 'center' ? 'justify-center text-center' :
                                slide.align === 'right' ? 'justify-end text-right' : 'justify-start text-left'
                            }`}
                    >
                        <div className={`max-w-4xl relative ${slide.align === 'split' ? 'grid grid-cols-1 lg:grid-cols-2 gap-20' : ''}`}>

                            {/* Decorative Line */}
                            {slide.align !== 'center' && (
                                <div className={`absolute -left-10 top-0 bottom-0 w-[1px] bg-[var(--accent-gold)] hidden lg:block opacity-30`}></div>
                            )}

                            <div>
                                <div className={`mb-6 flex items-center gap-4 ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                                    <span className="h-[1px] w-8 bg-[var(--accent-gold)]"></span>
                                    <span className="text-[var(--accent-gold)] text-xs md:text-sm font-bold tracking-[0.5rem] uppercase">
                                        {slide.tag}
                                    </span>
                                </div>

                                <h1 className="text-white text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] font-serif">
                                    {slide.title}
                                </h1>

                                <p className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed tracking-wide opacity-80">
                                    {slide.subtitle}
                                </p>

                                <div className={`flex ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                                    <button
                                        onClick={() => navigate(slide.link)}
                                        className="btn-gold group flex items-center gap-6 px-12 py-5"
                                    >
                                        <span className="relative z-10">{slide.cta}</span>
                                        <ArrowRight size={20} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
                                    </button>
                                </div>
                            </div>

                            {slide.align === 'split' && (
                                <div className="hidden lg:flex flex-col justify-center border-l border-white/10 pl-20 space-y-8">
                                    <div className="space-y-4">
                                        <div className="text-[var(--accent-gold)] font-serif italic text-2xl">Crafted for Excellence</div>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">Every piece in our couture collection is a masterpiece of tradition, meticulously handcrafted over hundreds of hours.</p>
                                    </div>
                                    <div className="flex gap-10">
                                        <div>
                                            <div className="text-white text-3xl font-serif">100%</div>
                                            <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Pure Silk</div>
                                        </div>
                                        <div>
                                            <div className="text-white text-3xl font-serif">Hand</div>
                                            <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Crafted</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-10 z-30">
                <div className="flex gap-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-[2px] transition-all duration-700 ${index === currentSlide ? 'w-24 bg-[var(--accent-gold)]' : 'w-10 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
                <div className="text-[var(--accent-gold)] font-serif tracking-widest text-xs">
                    0{currentSlide + 1} <span className="mx-2 opacity-30">/</span> 0{slides.length}
                </div>
            </div>

            {/* Vertical Branding */}
            <div className="absolute right-10 bottom-10 hidden lg:block z-30 group overflow-hidden">
                <div className="text-white/20 text-[10px] uppercase tracking-[1em] whitespace-nowrap [writing-mode:vertical-lr] rotate-180 py-4 opacity-50 group-hover:text-[var(--accent-gold)] transition-colors">
                    ESTABLISHED 2024 • THE ART OF COUTURE
                </div>
            </div>

        </section>
    );
};

export default Hero;
