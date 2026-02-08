import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import video1 from '../assets/carousel-video-1.mp4';
import video2 from '../assets/carousel-video-2.mp4';
import video3 from '../assets/carousel-video-3.mp4';
import video4 from '../assets/carousel-video-4.mp4';
import video5 from '../assets/carousel-video-5.mp4';
import video6 from '../assets/carousel-video-6.mp4';

// ... (imports remain the same)

const FeaturedCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const slides = [
        { id: 1, video: video1, title: 'Ethnic Elegance', subtitle: 'Shop Collection' },
        { id: 2, video: video2, title: 'Wedding Vibes', subtitle: 'Explore Now' },
        { id: 3, video: video3, title: 'Festive Ready', subtitle: 'View Lookbook' },
        { id: 4, video: video4, title: 'Summer Floral', subtitle: 'Grab The Look' },
        { id: 5, video: video5, title: 'Party Chic', subtitle: 'Discover More' },
        { id: 6, video: video6, title: 'Casual Comfy', subtitle: 'Style Guide' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, isVisible]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const getVisibleSlideIndex = (offset) => {
        return (currentIndex + offset + slides.length) % slides.length;
    };

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    return (
        <section
            ref={containerRef}
            className="py-6 bg-white overflow-hidden w-full relative touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="container mx-auto px-4 relative h-[300px] md:h-[400px] flex items-center justify-center">

                {/* Navigation Buttons (Small & Minimal) */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="absolute left-4 md:left-20 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white/90 transition-all w-10 h-10 flex items-center justify-center text-white hover:text-gray-900 border border-white/20"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="absolute right-4 md:right-20 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white/90 transition-all w-10 h-10 flex items-center justify-center text-white hover:text-gray-900 border border-white/20"
                >
                    <ChevronRight size={20} />
                </button>


                {/* Visible Slides Container */}
                <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                    {/* Left Slide (Previous) */}
                    <div className="absolute left-[-10%] md:left-0 w-[60%] md:w-[45%] h-[60%] md:h-[70%] opacity-40 transform scale-90 transition-all duration-500 ease-in-out z-0 blur-[2px] rounded-xl overflow-hidden saturate-0">
                        <video
                            src={slides[getVisibleSlideIndex(-1)].video}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Center Slide (Active) - Rectangular Aspect Ratio */}
                    <div className="absolute w-[80%] md:w-[60%] h-[80%] md:h-[90%] z-10 transform scale-100 transition-all duration-500 ease-in-out shadow-2xl rounded-sm overflow-hidden border border-white/10 ring-1 ring-black/5">
                        <video
                            src={slides[currentIndex].video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover"
                        />
                        {/* High Contrast Overlay - Refined Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-end items-center p-8 md:p-12 text-center">

                            <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-3 leading-tight drop-shadow-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                                <i>{slides[currentIndex].title.split(' ')[0]}</i> {slides[currentIndex].title.split(' ').slice(1).join(' ')}
                            </h3>

                            <div className="w-16 h-[2px] bg-white/80 mb-6 rounded-full shadow-lg"></div>

                            <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                                <button className="text-xs md:text-sm text-[var(--accent-gold)] border border-[var(--accent-gold)] bg-black/40 backdrop-blur-sm px-10 py-4 uppercase tracking-[0.25em] font-bold hover:bg-[var(--accent-gold)] hover:text-white transition-all duration-500 shadow-2xl">
                                    {slides[currentIndex].subtitle}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Slide (Next) */}
                    <div className="absolute right-[-10%] md:right-0 w-[60%] md:w-[45%] h-[60%] md:h-[70%] opacity-40 transform scale-90 transition-all duration-500 ease-in-out z-0 blur-[2px] rounded-xl overflow-hidden saturate-0">
                        <video
                            src={slides[getVisibleSlideIndex(1)].video}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedCarousel;
