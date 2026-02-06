

import React from 'react';
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

    return (
        <div className="bg-gradient-to-b from-white via-pink-50/30 to-white min-h-screen">
            <Hero />

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
