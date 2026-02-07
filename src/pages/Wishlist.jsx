import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist } = useShop();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 pt-32 pb-12 min-h-screen">
            <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 mb-6 hover:text-[var(--accent-gold)] transition-colors uppercase tracking-widest text-xs font-bold">
                <ArrowLeft size={16} className="mr-2" /> Back
            </button>
            <h1 className="text-3xl font-serif font-medium mb-8 uppercase tracking-widest">My Wishlist ({wishlist.length})</h1>

            {wishlist.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-gray-500 text-lg mb-8 font-light">Your wishlist is empty.</p>
                    <button onClick={() => navigate('/')} className="bg-[var(--accent-gold)] text-white px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all duration-500 shadow-xl shadow-gold/20">
                        Explore Products
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {wishlist.map((product, index) => (
                        <ProductCard key={`${product.id}-${index}`} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
