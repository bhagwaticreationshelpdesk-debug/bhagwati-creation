import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import wide banner images that already contain contrasting text
import banner1 from '../assets/hero_slide_2.png'; // Festive Collection
import banner2 from '../assets/hero_slide_3.jpg'; // Shaadi Season
import banner3 from '../assets/hero_slide_1.png'; // Designer Fabrics
import banner4 from '../assets/fabric_collection_hero.png'; // Indian Fabric Collection

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: banner1, link: '/category/new-arrivals' },
        { image: banner2, link: '/category/party-wear' },
        { image: banner3, link: '/category/fabric-collection' },
        { image: banner4, link: '/category/unstitched' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Top Branding Bar (Optional but keeps it professional) */}
            <div className="absolute top-0 left-0 w-full bg-[#ed2585] text-white py-1 z-20 overflow-hidden hidden md:block">
                <div className="animate-marquee whitespace-nowrap text-xs font-bold tracking-[0.2em] uppercase">
                    &nbsp;&nbsp;•&nbsp;&nbsp; Authenticity Guaranteed &nbsp;&nbsp;•&nbsp;&nbsp; Handpicked Fabrics &nbsp;&nbsp;•&nbsp;&nbsp; Premium Quality &nbsp;&nbsp;•&nbsp;&nbsp; Worldwide Shipping &nbsp;&nbsp;•&nbsp;&nbsp;
                </div>
            </div>

            {/* Main Wide Banner Slider */}
            <div className="relative w-full aspect-[21/9] md:aspect-[25/9] lg:aspect-[28/9] min-h-[300px] md:min-h-[450px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        onClick={() => navigate(slide.link)}
                    >
                        <img
                            src={slide.image}
                            alt={`Bhagwati Banner ${index + 1}`}
                            className="w-full h-full object-cover md:object-fill"
                        />
                    </div>
                ))}

                {/* Navigation Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-20 pointer-events-none">
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all pointer-events-auto"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all pointer-events-auto"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Progress Dots */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#ed2585] w-8 md:w-12' : 'bg-white/50 w-4 md:w-6 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Subtle Gradient Shadow at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10"></div>
        </section>
    );
};

export default Hero;
