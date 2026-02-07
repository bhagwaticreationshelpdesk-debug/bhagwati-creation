```
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Use high-quality base images
import hero1 from '../assets/hero1.png'; // Yellow dress model
import hero2 from '../assets/hero2.png'; // Blue lengha model
import hero3 from '../assets/hero3.png'; // Floral saree model
import hero4 from '../assets/party_bg.png'; // Wedding background

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: hero1,
            title: "Royal Haldi Collection",
            subtitle: "Bright, auspicious yellows for your special moments.",
            cta: "View Collection",
            link: "/category/haldi-special",
            align: "left",
            textColor: "text-yellow-900"
        },
        {
            image: hero2,
            title: "Midnight Blue Elegance",
            subtitle: "Sophisticated embroidery on premium velvet.",
            cta: "Shop Now",
            link: "/category/velvet-collection",
            align: "center",
            textColor: "text-white"
        },
        {
            image: hero3,
            title: "Floral Fantasy",
            subtitle: "Lightweight organza sarees for summer weddings.",
            cta: "Explore Sarees",
            link: "/category/sarees",
            align: "right",
            textColor: "text-pink-900"
        },
        {
            image: hero4,
            title: "The Grand Wedding Edit",
            subtitle: "Exclusive bridal wear for the modern bride.",
            cta: "Visit Boutique",
            link: "/category/bridal",
            align: "center",
            textColor: "text-white"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); 
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[85vh] overflow-hidden bg-gray-50 group">
            
            {/* Main Slider */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset - 0 transition - opacity duration - 1000 ease -in -out ${
    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
} `}
                >
                    {/* Background Image with Overlay */}
                    <div className="relative w-full h-full">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover object-top filter brightness-90 animate-subtle-zoom"
                            style={{ animation: index === currentSlide ? 'subtleZoom 20s infinite alternate' : 'none' }}
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className={`absolute inset - 0 bg - gradient - to - t ${ slide.align === 'center' ? 'from-black/60 via-transparent to-black/30' : 'from-black/40 via-transparent to-transparent' } `}></div>
                    </div>

                    {/* Content Layer */}
                    <div className={`absolute inset - 0 flex items - center p - 8 md: p - 16 ${
    slide.align === 'left' ? 'justify-start' :
        slide.align === 'right' ? 'justify-end' :
            'justify-center text-center'
} `}>
                        <div className={`max - w - xl space - y - 6 transform transition - all duration - 700 delay - 300 ${
    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
} `}>
                            <h2 className={`text - 4xl md: text - 6xl font - serif font - bold leading - tight drop - shadow - lg ${ slide.textColor === 'text-white' ? 'text-white' : slide.textColor } `}>
                                {slide.title}
                            </h2>
                            <p className={`text - lg md: text - xl font - light tracking - wide drop - shadow - md ${ slide.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-800' } `}>
                                {slide.subtitle}
                            </p>
                            <button
                                onClick={() => navigate(slide.link)}
                                className={`group / btn relative inline - flex items - center gap - 3 px - 8 py - 4 bg - white text - gray - 900 rounded - full font - medium tracking - wider uppercase transition - all hover: bg - [#ed2585] hover: text - white hover: scale - 105 shadow - xl`}
                            >
                                {slide.cta}
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls (Visible on Hover) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Modern Progress Bars */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h - 1 rounded - full transition - all duration - 500 ease - out ${
    index === currentSlide ? 'w-12 bg-[#ed2585]' : 'w-4 bg-white/50 hover:bg-white'
} `}
                    />
                ))}
            </div>

            <style>{`
@keyframes subtleZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.05); }
}
`}</style>
        </section>
    );
};

export default Hero;
```
