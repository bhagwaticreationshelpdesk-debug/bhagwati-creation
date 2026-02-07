import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EmailService } from '../services/email';

const Checkout = () => {
    const { cart, clearCart } = useShop();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });

    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^\d]/g, ''));
        return sum + price;
    }, 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create Order Object
        const newOrder = {
            id: 'ORD-' + Date.now(),
            date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            status: 'Pending',
            customer: formData,
            items: cart,
            total: total
        };

        // Save to LocalStorage (Simulating Backend)
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([newOrder, ...existingOrders]));

        // Send Email Notification
        const emailSent = await EmailService.sendOrderEmail(newOrder);

        let msg = `Order Placed Successfully! Order ID: ${newOrder.id}`;
        if (!emailSent) {
            msg += `\n(Note: Email notification failed. Please verify your EmailJS configuration.)`;
        }

        alert(msg);
        clearCart();
        navigate('/');
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <button onClick={() => navigate('/')} className="text-[var(--accent-gold)] underline">Back to Home</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
            <button onClick={() => navigate('/cart')} className="flex items-center text-gray-600 mb-6 hover:text-[var(--accent-gold)] transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Cart
            </button>
            <h1 className="text-3xl font-serif font-medium mb-8 text-center uppercase tracking-widest">Checkout</h1>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Form Section */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-semibold mb-6 uppercase tracking-widest">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all" placeholder="9876543210" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Address</label>
                            <textarea required name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all" placeholder="Street address, Flat no..." />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">City</label>
                                <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pincode</label>
                                <input required type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[var(--accent-gold)] text-white py-4 mt-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all duration-500 shadow-xl shadow-gold/20">
                            Place Order (COD)
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
                    <h2 className="text-xl font-semibold mb-6 uppercase tracking-widest">Your Order</h2>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6 custom-scrollbar">
                        {cart.map((item, idx) => (
                            <div key={idx} className="flex gap-4 border-b border-gray-50 pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg" />
                                <div>
                                    <h4 className="font-medium text-sm text-gray-800">{item.name}</h4>
                                    <p className="text-gray-400 text-[10px] uppercase tracking-widest">{item.category} {item.selectedSize ? `- Size: ${item.selectedSize}` : ''}</p>
                                    <p className="font-bold text-sm text-[var(--accent-gold)] mt-1">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-xl pt-2 border-t mt-2">
                            <span>Total</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
