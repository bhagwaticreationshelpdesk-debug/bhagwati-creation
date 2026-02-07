import React from 'react';
import { Phone } from 'lucide-react';
import videoShoppingBg from '../assets/video_shopping_banner.png';

const VideoShopping = () => {
    return (
        <section
            className="relative py-16 text-white text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${videoShoppingBg})` }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4 leading-tight tracking-wide">
                        The Ultimate In-Store Experience <br />
                        Via 24x7 Video Shopping
                    </h2>

                    <p className="text-sm md:text-base font-light mb-10 tracking-wider text-gray-200">
                        Our Stylists On Call Can Speak: English, Hindi, Gujarati & Marathi
                    </p>

                    <button className="bg-[var(--accent-gold)] text-white px-12 py-5 text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-500 shadow-2xl shadow-gold/20">
                        Start Call Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoShopping;
