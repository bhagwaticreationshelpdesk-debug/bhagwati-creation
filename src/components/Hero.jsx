import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        id: 1,
        // Wide shot of a couple/models in traditional suits/dresses (Sherwani/Lehenga)
        image: "https://images.unsplash.com/photo-1629237628889-1111d954e0c0?q=80&w=2070&auto=format&fit=crop",
        title: "Bhagwati Creation",
        subtitle: "The Essence of Luxury",
        description: "Experience the grandeur of hand-crafted ethnic wear.",
        btnText: "Explore Collection"
    },
    {
        id: 2,
        // Elegant saree/fabric shot
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1920&auto=format&fit=crop",
        title: "Royal Fabrics",
        subtitle: "Weave Your Story",
        description: "Authentic silks and embroideries for the modern royal.",
        btnText: "Shop Fabrics"
    },
    {
        id: 3,
        // Festive group/couple vibe
        image: "https://images.unsplash.com/photo-1549488497-6060824b232d?q=80&w=1920&auto=format&fit=crop",
        title: "Celebration Ready",
        subtitle: "Shine Bright",
        description: "Perfect ensembles for every joyous occasion.",
        btnText: "View Wedding Edit"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative w-full h-screen max-h-[90vh] overflow-hidden bg-black">

            {/* Main Full-Width Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image with Zoom Effect */}
                    <div className="relative w-full h-full overflow-hidden">
                        <motion.img
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                            className="w-full h-full object-cover object-center"
                        />

                        {/* Dark Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Text Overlay - Centered Banner Style */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        {/* Brand Name / Title as requested */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide drop-shadow-2xl">
                            <span className="block font-medium" style={{ fontFamily: 'Playfair Display' }}>
                                {heroSlides[currentSlide].title}
                            </span>
                        </h1>

                        <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded-full shadow-[0_0_15px_#D4AF37]"></div>

                        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wider uppercase">
                            {heroSlides[currentSlide].subtitle}
                        </p>

                        <p className="text-gray-300 text-lg max-w-xl mx-auto hidden md:block">
                            {heroSlides[currentSlide].description}
                        </p>

                        <div className="pt-8">
                            <Link
                                to="/category/new-arrivals"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group backdrop-blur-sm"
                            >
                                {heroSlides[currentSlide].btnText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-30 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto p-3 rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/50 transition-all backdrop-blur-sm"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto p-3 rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/50 transition-all backdrop-blur-sm"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full ${currentSlide === index ? 'w-10 h-1 bg-[#D4AF37]' : 'w-2 h-1 bg-white/30 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Decorative Gold Border Frame (Optional 'Banner' feel) */}
            <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/20 pointer-events-none z-10"></div>
        </section>
    );
};

export default Hero;
