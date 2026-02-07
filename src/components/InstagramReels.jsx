import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Instagram } from 'lucide-react';
import { LogoIcon } from './Branding';

import review1 from '../assets/review1.mp4';
import review2 from '../assets/review2.mp4';
import review3 from '../assets/review3.mp4';
import review4 from '../assets/review4.mp4';
import review5 from '../assets/review5.mp4';

const reviewsData = [
    { id: 1, video: review1, user: "@happy_customer_1" },
    { id: 2, video: review2, user: "@fashion_diva" },
    { id: 3, video: review3, user: "@ethnic_lover" },
    { id: 4, video: review4, user: "@style_icon" },
    { id: 5, video: review5, user: "@wedding_ready" }
];

const ReviewCard = ({ data }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    videoRef.current?.play().catch(() => { });
                } else {
                    videoRef.current?.pause();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
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
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-2 border-transparent group-hover:border-[var(--accent-gold)] transition-all duration-300 bg-gray-900">
                <video
                    ref={videoRef}
                    src={data.video}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                    preload="none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[var(--accent-gold)] z-20"
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-[var(--accent-gold)]/90 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                        <Instagram size={18} />
                        <span>View on Instagram</span>
                    </div>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-white p-[1px] shadow-sm">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <LogoIcon scale={0.4} />
                        </div>
                    </div>
                    <span className="text-sm font-medium tracking-wide">Bhagwati Patron</span>
                </div>
            </div>
        </div>
    );
};

const InstagramReels = () => {
    return (
        <section className="py-8 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6 space-y-4">
                    <span className="text-[var(--accent-gold)] font-bold tracking-[0.4em] text-[10px] uppercase">Real Grace, Real Style</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">
                        Royal <span className="text-[var(--accent-gold)] italic">Stories</span>
                    </h2>
                    <div className="w-24 h-px bg-gray-200 mx-auto mt-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        See how our patrons are styling their favorite Bhagwati Creations couture. Join our royal community on Instagram!
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="w-full">
                            <ReviewCard data={review} />
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <a
                        href="https://www.instagram.com/bhagwati_creations01/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-4 px-12 py-5 bg-[var(--accent-gold)] rounded-full text-white font-bold tracking-[0.2em] uppercase text-xs shadow-2xl shadow-[var(--accent-gold)]/20 hover:scale-105 transition-all duration-500 hover:bg-black group"
                    >
                        <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
                        <span>Join Our Royal Circle</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramReels;
