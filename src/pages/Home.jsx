

import React from 'react';
import { ShoppingBag, Truck, ShieldCheck, PhoneCall } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProductGrid from '../components/ProductGrid';
import ShopByCategories from '../components/ShopByCategories';
import InstagramReels from '../components/InstagramReels';
import VideoShopping from '../components/VideoShopping';

import { products } from '../data/products';

const Home = () => {
    // Filter products under ₹999
    const under999Products = products.filter(product => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        return price < 999;
    });

    const Feature = ({ icon: Icon, title, desc }) => (
        <div className="flex flex-col items-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-pink-50">
            <div className="p-3 bg-pink-50 rounded-full mb-3 text-pink-600">
                <Icon size={24} />
            </div>
            <h3 className="font-serif font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{desc}</p>
        </div>
    );

    return (
        <div className="bg-gradient-to-b from-white via-pink-50/30 to-white min-h-screen">
            <Hero />

            {/* Trust Signals Section */}
            <section className="container mx-auto px-4 py-8 -mt-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-xl shadow-pink-100/50">
                    <Feature icon={ShoppingBag} title="Premium Selection" desc="Curated Ethnic Wear" />
                    <Feature icon={Truck} title="Free Shipping" desc="On Orders Above ₹999" />
                    <Feature icon={ShieldCheck} title="Quality Guarantee" desc="100% Authentic Fabric" />
                    <Feature icon={PhoneCall} title="24/7 Support" desc="Dedicated Assistance" />
                </div>
            </section>

            <div className="space-y-12 pb-12">
                <ShopByCategories />

                <section className="bg-gradient-to-r from-pink-50 to-white py-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <ProductGrid title="New Arrivals" CarouselId="new-arrivals" />
                </section>

                <FeaturedCarousel />

                <ProductGrid
                    title="Under 999 Bestsellers"
                    products={under999Products}
                    CarouselId="under-999"
                />

                <div className="grid gap-8">
                    <ProductGrid
                        title="Co-ords Collection"
                        CarouselId="coords-collection"
                        products={Array(10).fill({}).map((_, i) => ({
                            id: `coords-${i}`,
                            name: "Co-ord Set Placeholder",
                            category: "Co-ords",
                            price: "₹0",
                            image: null
                        }))}
                    />
                    <ProductGrid
                        title="Cotton Suits"
                        CarouselId="cotton-suits"
                        products={Array(10).fill({}).map((_, i) => ({
                            id: `cotton-${i}`,
                            name: "Cotton Suit Placeholder",
                            category: "Suits",
                            price: "₹0",
                            image: null
                        }))}
                    />
                    <ProductGrid
                        title="Mixed Collection"
                        CarouselId="mixed-collection"
                        products={Array(10).fill({}).map((_, i) => ({
                            id: `mixed-${i}`,
                            name: "Mixed Item Placeholder",
                            category: "Mixed",
                            price: "₹0",
                            image: null
                        }))}
                    />
                </div>

                <InstagramReels />
                <VideoShopping />
            </div>
        </div>
    );
};

export default Home;
