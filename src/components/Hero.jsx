```javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ownerImage from '../assets/hero_face_final.png'; // Using the likely existing face image
import bgPattern from '../assets/fabric_collection_hero.png'; // Use as subtle texture

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[600px] bg-slate-900 flex items-center overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img src={bgPattern} alt="Background Texture" className="w-full h-full object-cover" />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 h-full py-12">
                
                {/* Text Content (Left) */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left animate-slide-in-left">
                    <div className="inline-block px-4 py-1 border border-pink-500 rounded-full bg-pink-500/10 backdrop-blur-sm mb-4">
                        <span className="text-pink-400 text-sm font-medium tracking-wider uppercase">Founder's Selection</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-serif">
                        Redefining <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                            Indian Elegance
                        </span>
                    </h1>
                    
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
                        "At Bhagwati Creations, we don't just sell fabrics; we curate a legacy. 
                        Experience the finest handpicked ethnic wear tailored for your unique style."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <button 
                            onClick={() => navigate('/category/fabric-collection')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Explore Our Collection</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Owner Image (Right) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                    {/* Decorative Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-pink-500/20 rounded-full"></div>

                    {/* Image Frame */}
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-slate-800 transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                        <img 
                            src={ownerImage} 
                            alt="Founder of Bhagwati Creations" 
                            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                        />
                        {/* Overlay Gradient on Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        
                        <div className="absolute bottom-6 left-6 text-left">
                            <p className="text-white font-serif text-xl italic">Authentic & Pure</p>
                            <p className="text-gray-300 text-sm">Since 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
```
