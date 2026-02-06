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
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay blocked/failed", e));
        }
    }, []);

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
            className="relative flex flex-col group cursor-pointer h-full"
            onClick={handleCardClick}
        >
            {/* Card Container - Fixed Aspect Ratio */}
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-2 border-transparent group-hover:border-pink-500 transition-all duration-300 bg-gray-900">
                <video
                    ref={videoRef}
                    src={data.video}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Mute Button (Top Right) */}
                <button
                    onClick={toggleMute}
                    className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600 z-20"
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                {/* Instagram Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-pink-600/90 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
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

                {/* Grid Container for Videos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="w-full">
                            <ReviewCard data={review} />
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="https://www.instagram.com/bhagwati_creations01/"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full text-white font-bold tracking-wide shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50"
                    >
                        <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
                        <span className="text-base">Follow for Exclusive Giveaways & Crazy Steals! ✨</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default InstagramReels;
