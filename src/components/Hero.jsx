import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Import carousel images
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/product5.png';

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: hero1,
            title: "Traditional Grace",
            tag: "Festive Collection"
        },
        {
            image: hero2,
            title: "Royal Elegance",
            tag: "Luxury Suits"
        },
        {
            image: hero3,
            title: "Floral Charm",
            tag: "Summer Collection"
        },
        {
            image: hero4,
            title: "Designer Pride",
            tag: "New Arrivals"
        }
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
        <section className="relative w-full min-h-[85vh] bg-[#FFF8F0] overflow-hidden flex flex-col justify-center">

            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Top Marquee (High Contrast) */}
            <div className="absolute top-0 left-0 w-full bg-[#ed2585] text-white py-1 z-20 overflow-hidden hidden md:block">
                <div className="animate-marquee whitespace-nowrap text-xs font-bold tracking-[0.2em] uppercase">
                    &nbsp;&nbsp;•&nbsp;&nbsp; Authenticity Guaranteed &nbsp;&nbsp;•&nbsp;&nbsp; Handpicked Fabrics &nbsp;&nbsp;•&nbsp;&nbsp; Premium Quality &nbsp;&nbsp;•&nbsp;&nbsp; Worldwide Shipping &nbsp;&nbsp;•&nbsp;&nbsp;
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col lg:flex-row items-center pt-8 md:pt-0">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 pt-12 lg:pt-0 z-20 lg:pr-12">
                    <div className="space-y-8 text-center lg:text-left">

                        <div className="inline-flex items-center gap-4 justify-center lg:justify-start">
                            <span className="w-12 h-[1px] bg-gray-400"></span>
                            <span className="text-gray-500 font-semibold tracking-[0.2em] text-xs uppercase">Since 2020</span>
                            <span className="w-12 h-[1px] bg-gray-400"></span>
                        </div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-gray-900 leading-[1.1] tracking-tight">
                            Timeless <br />
                            <span className="relative inline-block text-[#ed2585] italic font-medium px-2">
                                Elegance
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#ed2585]/10 -z-10 rounded-full"></span>
                            </span> <br />
                            For You.
                        </h1>

                        <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            Discover an exclusive collection of heavy suits and premium fabrics, handpicked to redefine your ethnic wardrobe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <button
                                onClick={() => navigate('/category/fabric-collection')}
                                className="px-10 py-4 bg-gray-900 text-white rounded-full font-medium tracking-wide uppercase shadow-lg hover:bg-black hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                Shop Collection <ArrowUpRight size={18} />
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-4 bg-transparent text-gray-900 border border-gray-300 rounded-full font-medium tracking-wide uppercase hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                            >
                                Visit Store
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex flex-col items-center lg:items-start gap-1">
                                <h4 className="font-bold text-2xl text-gray-900">20k+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Customers</p>
                            </div>
                            <div className="w-[1px] h-10 bg-gray-300"></div>
                            <div className="flex flex-col items-center lg:items-start gap-1">
                                <h4 className="font-bold text-2xl text-gray-900">4.9/5</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Top Rated</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Section (Carousel) */}
                <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">

                    {/* Background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#ffe4e6] to-[#fce7f3] rounded-full blur-[80px] opacity-60 z-0"></div>

                    <div className="relative z-10 w-full max-w-sm md:max-w-md">
                        {/* Main Image Frame - Arch Shape */}
                        <div className="relative rounded-t-full rounded-b-[200px] border-[8px] border-white shadow-2xl overflow-hidden bg-white aspect-[3/4]">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Collection Tag */}
                                    <div className="absolute bottom-8 left-0 right-0 text-center">
                                        <div className="inline-block bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white">
                                            <p className="text-xs font-bold text-[#ed2585] uppercase tracking-widest mb-1">{slide.tag}</p>
                                            <p className="text-gray-900 font-serif font-bold text-lg">{slide.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Slider Navigation Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#ed2585] w-6' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Slider Icons */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20 hidden md:block"
                        >
                            <ChevronLeft size={20} className="text-gray-900" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors z-20 hidden md:block"
                        >
                            <ChevronRight size={20} className="text-gray-900" />
                        </button>

                        {/* Decorative Stamp */}
                        <div className="absolute -top-6 -right-6 animate-spin-slow z-20">
                            <div className="relative w-28 h-28 bg-[#ed2585] rounded-full flex items-center justify-center shadow-xl border-4 border-white text-white">
                                <svg className="w-full h-full absolute p-2" viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circle2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text fontSize="11" fontWeight="bold" letterSpacing="1">
                                        <textPath href="#circle2" className="uppercase fill-white">
                                            • Premium Quality • Authentic
                                        </textPath>
                                    </text>
                                </svg>
                                <Star fill="white" size={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
