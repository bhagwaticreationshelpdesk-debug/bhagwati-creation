import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage1 from '../assets/hero_image_new.png';
import heroImage2 from '../assets/hero_image.png';

const heroSlides = [
    {
        id: 1,
        image: heroImage1,
        subtitle: "New Collection"
    },
    {
        id: 2,
        image: heroImage2,
        subtitle: "Royal Edition"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Manual Navigation (Drag/Swipe)
    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            // Swipe Left -> Next Slide
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        } else if (info.offset.x > 50) {
            // Swipe Right -> Prev Slide
            setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        }
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-gray-900 font-sans group">

            {/* Slideshow Container */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                >
                    {/* Background Image */}
                    <div className="relative w-full h-full overflow-hidden">
                        <motion.img
                            src={heroSlides[currentSlide].image}
                            alt="Hero Slide"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                            className="w-full h-full object-cover object-top select-none pointer-events-none"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Static Text Overlay (Consistent Across Slides) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 pointer-events-none">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full relative">
                    {/* Top Left Tag */}
                    <div className="absolute top-12 left-4 md:left-0 md:top-20 border border-white/40 bg-black/20 backdrop-blur-md px-4 py-1.5">
                        <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                            New Edition 2024
                        </span>
                    </div>

                    {/* Main Brand Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter drop-shadow-2xl mb-2 relative z-10">
                        <span className="block font-medium italic" style={{ fontFamily: 'Playfair Display' }}>
                            Bhagwati
                        </span>
                        <span className="block text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.4em] uppercase mt-2 md:mt-4 text-[var(--accent-gold)]">
                            Creations
                        </span>
                    </h1>

                    {/* Description */}
                    <div className="space-y-8 max-w-2xl mx-auto mt-12">
                        <p className="text-white/90 text-lg md:text-xl font-light drop-shadow-lg leading-relaxed hidden md:block tracking-wide">
                            Discover the new era of ethnic chic with our exclusive collection.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full h-1.5 shadow-sm ${currentSlide === index ? 'w-12 bg-[#D4AF37]' : 'w-2 bg-white/60 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
