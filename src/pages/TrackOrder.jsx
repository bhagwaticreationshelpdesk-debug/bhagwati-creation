import React, { useState } from 'react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState(null);

    const handleTrack = (e) => {
        e.preventDefault();
        // Simulation logic
        if (orderId.trim()) {
            setStatus({
                id: orderId,
                state: 'Processing',
                message: 'Your order is currently being packed at our facility.',
                lastUpdate: new Date().toLocaleDateString()
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-16 min-h-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-serif text-[var(--accent-gold)] mb-8 uppercase tracking-widest">Track Your Order</h1>
                <p className="text-gray-500 mb-8 font-light">Enter your Order ID to see the current status of your shipment.</p>

                <form onSubmit={handleTrack} className="flex gap-4 mb-12">
                    <input
                        type="text"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="e.g., ORD-123456"
                        className="flex-1 border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent outline-none transition-all shadow-sm"
                        required
                    />
                    <button type="submit" className="bg-[var(--accent-gold)] text-white px-10 py-4 rounded-xl hover:bg-black transition-all duration-300 font-bold uppercase tracking-widest shadow-xl shadow-gold/10">
                        Track
                    </button>
                </form>

                {status && (
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-left animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">Order #{status.id}</h3>
                                <p className="text-sm text-gray-500">Last Updated: {status.lastUpdate}</p>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {status.state}
                            </span>
                        </div>
                        <p className="text-gray-700">{status.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackOrder;
