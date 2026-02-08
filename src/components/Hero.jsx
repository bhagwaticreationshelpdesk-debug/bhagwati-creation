import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        id: 1,
        // Using a modern Indian fashion image (close to suits/dresses vibe)
        image: "https://images.unsplash.com/photo-1616892550186-b484558eec13?q=80&w=2070&auto=format&fit=crop",
        title: "Bhagwati Creation",
        subtitle: "Elegance in Every Stitch",
        description: "From power suits to graceful flowing dresses, discover the new era of ethnic chic.",
        btnText: "Explore Collection",
        highlight: "suits & dresses"
    },
    {
        id: 2,
        // Co-ords / Modern Fusion Vibe
        image: "https://images.unsplash.com/photo-1631215570081-34440263309a?q=80&w=2062&auto=format&fit=crop",
        title: "The Co-ord Edit",
        subtitle: "Effortlessly You",
        description: "Perfectly matched sets designed for the modern woman who loves comfort and style.",
        btnText: "Shop Co-ords",
        highlight: "trending now"
    },
    {
        id: 3,
        // Celebration / Wedding Vibe (Lehenga/Saree)
        image: "https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=2017&auto=format&fit=crop",
        title: "Royal Festivities",
        subtitle: "Timeless Traditions",
        description: "Celebrate love with our exquisite range of handcrafted wedding ensembles.",
        btnText: "View Wedding Edit",
        highlight: "festive ready"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative w-full h-screen max-h-[90vh] overflow-hidden bg-black font-sans">

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
                    {/* Background Image with Slow Zoom Effect */}
                    <div className="relative w-full h-full overflow-hidden">
                        <motion.img
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].subtitle}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8, ease: "linear" }}
                            className="w-full h-full object-cover object-top"
                        />

                        {/* High Contrast Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-80"></div>
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl mx-auto space-y-6 md:space-y-8"
                    >
                        {/* Highlight Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mx-auto">
                            <Heart size={14} className="text-[#E63946] fill-[#E63946]" />
                            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                                {heroSlides[currentSlide].highlight}
                            </span>
                        </div>

                        {/* Brand Name / Main Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                            <span className="block font-medium" style={{ fontFamily: 'Playfair Display' }}>
                                {heroSlides[currentSlide].title}
                            </span>
                        </h1>

                        {/* Decoration Line */}
                        <div className="flex items-center justify-center gap-4 opacity-80">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                            <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                        </div>

                        {/* Subtitle & Description - High Contrast */}
                        <div className="space-y-4">
                            <p className="text-2xl md:text-3xl text-[#F9F7F2] font-light italic tracking-wider" style={{ fontFamily: 'Cinzel Decorative' }}>
                                {heroSlides[currentSlide].subtitle}
                            </p>

                            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                                {heroSlides[currentSlide].description}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <Link
                                to="/category/new-arrivals"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] rounded-sm"
                            >
                                {heroSlides[currentSlide].btnText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-30 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto p-4 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm group"
                >
                    <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto p-4 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm group"
                >
                    <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full h-1.5 ${currentSlide === index ? 'w-12 bg-[#D4AF37]' : 'w-2 bg-white/40 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
