import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        id: 1,
        // Slide 1: Suits & Dresses - High Fashion Vibe
        // Using a reliable Fashion/Model image
        image: "https://images.unsplash.com/photo-1549488497-6060824b232d?q=80&w=2070&auto=format&fit=crop",
        fallback: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073",
        title: "Bhagwati Creation",
        subtitle: "Elegance in Every Stitch",
        description: "From power suits to graceful flowing dresses, discover the new era of ethnic chic.",
        btnText: "Explore Collection",
        highlight: "suits & dresses"
    },
    {
        id: 2,
        // Slide 2: Co-ords - Modern/Trendy
        // Using a vibrant fashion image
        image: "https://images.unsplash.com/photo-1616892550186-b484558eec13?q=80&w=2070&auto=format&fit=crop",
        fallback: "https://images.unsplash.com/photo-1629814406233-3168d601d36d?q=80&w=2070",
        title: "The Co-ord Edit",
        subtitle: "Effortlessly You",
        description: "Perfectly matched sets designed for the modern woman who loves comfort and style.",
        btnText: "Shop Co-ords",
        highlight: "trending now"
    },
    {
        id: 3,
        // Slide 3: Wedding/Festive
        // Using a distinct festive/textured image
        image: "https://images.unsplash.com/photo-1583391726247-bd742751a7fb?q=80&w=2070&auto=format&fit=crop",
        fallback: "https://images.unsplash.com/photo-1512413914633-b51febc744aa?q=80&w=2070",
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
        <section className="relative w-full h-screen max-h-[90vh] overflow-hidden bg-gray-900 font-sans group">

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
                            onError={(e) => {
                                // Smart fallback: If main image fails, use the specific fallback for this slide
                                // This prevents all slides from showing the same image
                                if (e.target.src !== heroSlides[currentSlide].fallback) {
                                    e.target.src = heroSlides[currentSlide].fallback;
                                }
                            }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60"></div>
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-6xl mx-auto space-y-6 md:space-y-8"
                    >
                        {/* Highlight Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/30 mx-auto shadow-lg">
                            <Heart size={14} className="text-[#E63946] fill-[#E63946]" />
                            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase shadow-black drop-shadow-md">
                                {heroSlides[currentSlide].highlight}
                            </span>
                        </div>

                        {/* Brand Name / Main Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                            <span className="block font-medium" style={{ fontFamily: 'Playfair Display' }}>
                                {heroSlides[currentSlide].title}
                            </span>
                        </h1>

                        {/* Decoration Line */}
                        <div className="flex items-center justify-center gap-4 opacity-90">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                            <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"></div>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                        </div>

                        {/* Subtitle & Description */}
                        <div className="space-y-4">
                            <p className="text-2xl md:text-4xl text-[#F9F7F2] font-light italic tracking-wider drop-shadow-md" style={{ fontFamily: 'Cinzel Decorative' }}>
                                {heroSlides[currentSlide].subtitle}
                            </p>

                            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
                                {heroSlides[currentSlide].description}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <Link
                                to="/category/new-arrivals"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white/90 text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] rounded-sm backdrop-blur-sm"
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
                    className="pointer-events-auto p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm group shadow-lg"
                >
                    <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm group shadow-lg"
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
                        className={`transition-all duration-500 rounded-full h-1.5 shadow-sm ${currentSlide === index ? 'w-12 bg-[#D4AF37]' : 'w-2 bg-white/60 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
