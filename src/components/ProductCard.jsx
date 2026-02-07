import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useShop();
    const navigate = useNavigate();

    const isWishlisted = wishlist.some(item => item.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(product);
    };

    const handleQuickView = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onQuickView) onQuickView(product);
    }

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div
            className="group cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className="relative aspect-[3/4.5] overflow-hidden bg-[var(--bg-primary)] mb-6 rounded-sm">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-[2000ms] ${isHovered ? 'scale-110' : 'scale-100'}`}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 bg-gray-50 uppercase tracking-[0.2em] text-[10px]">
                        Bhagwati Creation
                    </div>
                )}

                {/* Glassmorphism Quick Action */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 overflow-hidden rounded-full ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-white/90 backdrop-blur-md text-[var(--text-primary)] py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[var(--accent-gold)] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <ShoppingBag size={14} /> Add to Cart
                    </button>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                        onClick={handleWishlist}
                        className={`p-3 rounded-full transition-all duration-500 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            } ${isWishlisted ? 'bg-[var(--accent-gold)] text-white' : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-[var(--accent-gold)]'}`}
                    >
                        <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                    <button
                        onClick={handleQuickView}
                        className={`p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-[var(--accent-gold)] transition-all duration-500 delay-75 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`}
                    >
                        <Eye size={16} />
                    </button>
                </div>

                {/* Tag */}
                {product.tag && (
                    <span className="absolute top-4 left-4 bg-[var(--accent-wine)] text-white text-[8px] uppercase font-bold tracking-[0.2em] px-3 py-1.5 rounded-sm">
                        {product.tag}
                    </span>
                )}
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">{product.category}</h3>
                <h4 className="text-lg font-serif text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-gold)] transition-colors">{product.name}</h4>
                <div className="flex items-center gap-3">
                    <span className="text-[var(--accent-gold)] font-bold">{product.price}</span>
                    {product.originalPrice && (
                        <span className="text-gray-300 line-through text-sm">{product.originalPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
