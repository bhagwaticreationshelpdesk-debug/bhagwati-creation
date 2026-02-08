import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage1 from '../assets/hero_slide_1.png';
import heroImage2 from '../assets/hero_slide_2.png';

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
        <section className="relative w-full overflow-hidden bg-gray-900 font-sans group">
            {/* Invisible Sizer Image to set container aspect ratio */}
            <img
                src={heroSlides[0].image}
                alt="Sizer"
                className="w-full h-auto opacity-0 invisible relative z-0 pointer-events-none"
            />

            {/* Slideshow Container */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                >
                    {/* Background Image Container */}
                    <div className="relative w-full h-full overflow-hidden bg-black">
                        {/* 1. Blurred Background Layer (Fills Screen) */}
                        <div className="absolute inset-0">
                            <img
                                src={heroSlides[currentSlide].image}
                                alt="Background Blur"
                                className="w-full h-full object-cover blur-2xl scale-110 opacity-50 block"
                            />
                        </div>

                        {/* 2. Main Image Layer (Fits Screen) */}
                        <img
                            src={heroSlides[currentSlide].image}
                            alt="Hero Slide"
                            className="relative z-10 w-full h-full object-contain pointer-events-none drop-shadow-2xl block scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-20"></div>
                    </div>
                </motion.div>
            </AnimatePresence>



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
