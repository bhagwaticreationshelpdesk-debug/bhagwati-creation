import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        id: 1,
        // Slide 1: Royal/Bridal - Wide, Cinematic
        image: "https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=2070&auto=format&fit=crop",
        fallback: "https://images.unsplash.com/photo-1583391726247-bd742751a7fb?q=80&w=2070",
        title: "Bhagwati Creations",
        subtitle: "Elegance in Every Stitch",
        description: "From power suits to graceful flowing dresses, discover the new era of ethnic chic.",
        btnText: "Explore Collection",
        highlight: "Heritage Collection"
    },
    {
        id: 2,
        // Slide 2: Contemporary/Chic - Bright, Fashion
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2070&auto=format&fit=crop",
        fallback: "https://images.unsplash.com/photo-1616892550186-b484558eec13?q=80&w=2070",
        title: "The Co-ord Edit",
        subtitle: "Effortlessly You",
        description: "Perfectly matched sets designed for the modern woman who loves comfort and style.",
        btnText: "Shop Co-ords",
        highlight: "Modern Chic"
    },
    {
        id: 3,
        // Slide 3: Wedding/Festive - Grand, Gold
        image: "https://images.unsplash.com/photo-1601614742512-87db98f80459?q=80&w=2070&auto=format&fit=crop",
        fallback: "https://images.unsplash.com/photo-1512413914633-b51febc744aa?q=80&w=2070",
        title: "Royal Festivities",
        subtitle: "Timeless Traditions",
        description: "Celebrate love with our exquisite range of handcrafted wedding ensembles.",
        btnText: "View Wedding Edit",
        highlight: "Festive Ready"
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
        <section className="relative w-full h-screen overflow-hidden bg-gray-900 font-sans group">

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

            {/* Content Text Overlay - Magazine/Poster Style */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full relative"
                    >
                        {/* 1. Top Left Tag (Like 'New Edition' in example) */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute top-12 left-4 md:left-0 md:top-20 border border-white/40 bg-black/20 backdrop-blur-md px-4 py-1.5"
                        >
                            <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                                New Edition 2024
                            </span>
                        </motion.div>

                        {/* 2. Main Brand Name (Huge & Elegant) */}
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter drop-shadow-2xl mb-2 relative z-10">
                            <span className="block font-medium italic" style={{ fontFamily: 'Playfair Display' }}>
                                Bhagwati
                            </span>
                            <span className="block text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.4em] uppercase mt-2 md:mt-4 text-[var(--accent-gold)]">
                                Creations
                            </span>
                        </h1>

                        {/* 3. Contrasting 'Sticker' Message (Like 'Shuddh Desi Bridesmaids') */}
                        <motion.div
                            initial={{ rotate: -5, scale: 0 }}
                            animate={{ rotate: -2, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                            className="relative mt-8 mb-10"
                        >
                            <div className="absolute inset-0 bg-[#E63946] transform skew-x-12 rounded-sm shadow-xl"></div>
                            <div className="relative px-8 py-2 md:px-12 md:py-4 bg-white transform -skew-x-12 border-2 border-black shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <span className="text-black text-xl md:text-3xl font-black uppercase tracking-tighter italic" style={{ fontFamily: 'Inter' }}>
                                    {heroSlides[currentSlide].highlight}
                                </span>
                            </div>
                            {/* Decorative Elements around sticker */}
                            <Heart className="absolute -top-4 -right-4 text-[#E63946] fill-[#E63946] w-8 h-8 md:w-12 md:h-12 drop-shadow-lg animate-bounce" />
                            <Heart className="absolute -bottom-4 -left-4 text-[#E63946] fill-[#E63946] w-6 h-6 md:w-8 md:h-8 drop-shadow-lg animate-pulse" />
                        </motion.div>

                        {/* 4. Description & CTA */}
                        <div className="space-y-8 max-w-2xl mx-auto pointer-events-auto">
                            <p className="text-white/90 text-lg md:text-xl font-light drop-shadow-lg leading-relaxed hidden md:block">
                                {heroSlides[currentSlide].description}
                            </p>

                            <Link
                                to="/category/new-arrivals"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
                            >
                                {heroSlides[currentSlide].btnText}
                                <ArrowRight size={18} />
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
