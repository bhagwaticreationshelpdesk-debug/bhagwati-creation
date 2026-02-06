import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, VolumeX, ArrowRight, ArrowLeft, Instagram } from 'lucide-react';

import review1 from '../assets/review1.mp4';
import review2 from '../assets/review2.mp4';
import review3 from '../assets/review3.mp4';
import review4 from '../assets/review4.mp4';
import review5 from '../assets/review5.mp4';

const reviewsData = [
    {
        id: 1,
        video: review1,
        user: "@happy_customer_1"
    },
    {
        id: 2,
        video: review2,
        user: "@fashion_diva"
    },
    {
        id: 3,
        video: review3,
        user: "@ethnic_lover"
    },
    {
        id: 4,
        video: review4,
        user: "@style_icon"
    },
    {
        id: 5,
        video: review5,
        user: "@wedding_ready"
    }
];

const ReviewCard = ({ data }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.error("Autoplay fail:", e));
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleCardClick = () => {
        window.open('https://www.instagram.com/bhagwati_creations01/', '_blank');
    };

    return (
        <div
            className="relative flex flex-col group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
        >
            {/* Card Container - Fixed Aspect Ratio */}
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-2 border-transparent group-hover:border-pink-500 transition-all duration-300 bg-gray-900">
                <video
                    ref={videoRef}
                    src={data.video}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loop
                    muted
                    playsInline
                    preload="auto"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Mute Button (Top Right) */}
                <button
                    onClick={toggleMute}
                    className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600"
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                {/* Instagram Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-pink-600/90 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Instagram size={18} />
                        <span>View on Instagram</span>
                    </div>
                </div>

                {/* User Info (Bottom Left) */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                            <Instagram size={14} />
                        </div>
                    </div>
                    <span className="text-sm font-medium tracking-wide">Bhagwati Creations</span>
                </div>
            </div>
        </div>
    );
};

const InstagramReels = () => {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12 space-y-3">
                    <span className="text-pink-600 font-semibold tracking-wider text-sm uppercase">Real Stories, Real Style</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Customer <span className="text-pink-600">Love</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        See how our customers are styling their favorite Bhagwati Creations outfits. Join our community on Instagram!
                    </p>
                </div>

                {/* Reels Slider Container */}
                <div className="relative group/slider max-w-6xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('reviews-container');
                            if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white p-3 rounded-full shadow-xl text-gray-800 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-pink-50 hover:text-pink-600 disabled:opacity-0 hidden md:block border border-gray-100"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('reviews-container');
                            if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white p-3 rounded-full shadow-xl text-gray-800 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-pink-50 hover:text-pink-600 hidden md:block border border-gray-100"
                    >
                        <ArrowRight size={24} />
                    </button>

                    {/* Scrollable Row */}
                    <div
                        id="reviews-container"
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reviewsData.map((review) => (
                            <div key={review.id} className="min-w-[260px] md:min-w-[280px] snap-center">
                                <ReviewCard data={review} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="https://www.instagram.com/bhagwati_creations01/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors shadow-sm"
                    >
                        <Instagram size={18} />
                        Follow @bhagwati_creations01
                    </a>
                </div>

            </div>
        </section>
    );
};

export default InstagramReels;
