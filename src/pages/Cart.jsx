import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useShop();
    const navigate = useNavigate();

    const subtotal = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
        return sum + price;
    }, 0);

    return (
        <div className="bg-[#FCFAFA] min-h-screen pt-36 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Clean Header & Back Button */}
                <div className="flex flex-col items-center mb-16 relative">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400 hover:text-[var(--accent-gold)] transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
                    >
                        <ArrowLeft size={14} /> Back
                    </button>

                    <span className="text-[var(--accent-gold)] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Your Selections</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 text-center uppercase tracking-tight">Shopping Bag ({cart.length})</h1>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="w-16 h-px bg-gray-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full border border-[var(--accent-gold)]"></div>
                        <div className="w-16 h-px bg-gray-200"></div>
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="max-w-2xl mx-auto text-center py-32 bg-white rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 px-8">
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                                <ShoppingBag size={48} strokeWidth={1} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-serif text-gray-900 mb-4 italic">Your bag is weightless</h2>
                        <p className="text-gray-400 font-light mb-12 max-w-sm mx-auto leading-relaxed">
                            Every masterpiece begins with a single selection. Discover our latest couture collection.
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="btn-gold px-12 py-5 text-sm"
                        >
                            Start Exploring
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Cart Items List */}
                        <div className="lg:col-span-8 space-y-6">
                            {cart.map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="group flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                                >
                                    <div className="w-32 h-44 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] text-[var(--accent-gold)] uppercase tracking-widest font-bold mb-1 block">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-xl font-serif text-gray-900">{item.name}</h3>
                                                {item.selectedSize && (
                                                    <p className="text-xs text-gray-400 mt-1">Size: <span className="text-gray-900 font-bold uppercase">{item.selectedSize}</span></p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                                title="Remove Item"
                                            >
                                                <Trash2 size={20} strokeWidth={1.5} />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <div className="text-lg font-bold text-gray-900">{item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary Sticky Section */}
                        <div className="lg:col-span-4 lg:sticky lg:top-36">
                            <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-black/5 border border-gray-100">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-10 border-b border-gray-50 pb-6 text-center">Summary</h3>
                                <div className="space-y-6 text-sm">
                                    <div className="flex justify-between text-gray-500">
                                        <span className="font-light tracking-wide uppercase text-[10px]">Subtotal</span>
                                        <span className="text-gray-900 font-bold tracking-widest text-[10px]">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span className="font-light tracking-wide uppercase text-[10px]">Shipping</span>
                                        <span className="text-[var(--accent-gold)] font-bold tracking-[0.2em] text-[10px] uppercase">Complimentary</span>
                                    </div>
                                    <div className="pt-6 border-t border-gray-50 flex justify-between items-end">
                                        <span className="text-lg font-serif">Estimated Total</span>
                                        <span className="text-2xl font-bold tracking-tighter">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="mt-12 space-y-4">
                                    <button
                                        onClick={() => navigate('/checkout')}
                                        className="btn-gold w-full py-5 text-sm font-bold shadow-2xl shadow-[var(--accent-gold)]/10"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <p className="text-[9px] text-gray-300 text-center uppercase tracking-[0.2em] font-medium pt-4">
                                        SECURE GALAXY CHECKOUT ✦ FREE DELIVERY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
