import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        id: 1,
        // Using a reliable luxury fabric/fashion image
        image: "https://images.unsplash.com/photo-1583391726247-bd742751a7fb?q=80&w=1920&auto=format&fit=crop",
        subtitle: "Royal Couture",
        title: "Timeless Elegance",
        description: "Discover the finest collection of authentic ethnic wear, crafted for those who embrace tradition with style.",
        position: "center",
    },
    {
        id: 2,
        // Using a vibrant wedding/celebration image
        image: "https://images.unsplash.com/photo-1549488497-6060824b232d?q=80&w=1920&auto=format&fit=crop",
        subtitle: "Handpicked Luxury",
        title: "The Art of Weaving",
        description: "Every thread tells a story. Explore our exclusive range of handpicked fabrics and designer ensembles.",
        position: "top",
    },
    {
        id: 3,
        // Using a rich detailed texture image
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1920&auto=format&fit=crop",
        subtitle: "Modern Tradition",
        title: "Celebrate Grace",
        description: "From classic sarees to contemporary lehengas, find the perfect outfit for your special moments.",
        position: "center",
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative w-full h-[85vh] bg-[#FDFBF7] overflow-hidden flex flex-col lg:flex-row">

            {/* Left Side: Content - High Contrast Dark Mode for Text */}
            <div className="w-full lg:w-1/2 h-full lg:h-auto relative z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20 bg-[#2A0A18] text-[#FDFBF7]">

                {/* Decorative Pattern Background for Left Side */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}>
                </div>

                <div className="relative z-10 space-y-6 lg:space-y-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left pt-12 lg:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 w-fit mx-auto lg:mx-0">
                                <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
                                    {heroSlides[currentSlide].subtitle}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-4">
                                <span className="block text-[#FDFBF7]">{heroSlides[currentSlide].title.split(' ')[0]}</span>
                                <span className="block text-[#D4AF37] italic font-light ml-8 lg:ml-16" style={{ fontFamily: 'Cinzel Decorative' }}>
                                    {heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                                {heroSlides[currentSlide].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link
                            to="/category/new-arrivals"
                            className="group relative px-8 py-4 bg-[#D4AF37] text-[#2A0A18] font-bold tracking-widest uppercase text-xs overflow-hidden transition-all hover:bg-white hover:text-[#2A0A18]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Shop Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            to="/about"
                            className="group px-8 py-4 border border-[#D4AF37]/30 text-[#D4AF37] font-bold tracking-widest uppercase text-xs hover:bg-[#D4AF37]/10 transition-colors"
                        >
                            View Our Story
                        </Link>
                    </div>
                </div>

                {/* Custom Navigation Dots for Mobile/Tablet */}
                <div className="flex justify-center lg:justify-start gap-3 mt-12 lg:absolute lg:bottom-12 lg:left-20">
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side: Image Slider */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden bg-gray-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth slow zoom effect
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Image with overlay for better contrast integration at the edge */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#2A0A18]/50 lg:to-[#2A0A18] z-10 opacity-70 lg:opacity-100 lg:w-[10%]"></div>
                        <img
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            className="w-full h-full object-cover object-center"
                            style={{ objectPosition: heroSlides[currentSlide].position }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#D4AF37] hover:text-[#2A0A18] transition-all"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#D4AF37] hover:text-[#2A0A18] transition-all"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Badge */}
                <div className="absolute top-8 right-8 z-20 bg-white/90 backdrop-blur text-[#2A0A18] px-4 py-2 rounded-sm text-xs font-bold tracking-wider shadow-lg">
                    EST. 2024
                </div>
            </div>
        </section>
    );
};

export default Hero;
