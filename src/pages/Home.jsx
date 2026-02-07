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
        <div className="bg-[var(--bg-primary)] min-h-screen">
            <Hero />

            <div className="space-y-24 pb-24 mt-12">
                <InstagramReels />

                <section className="py-20 bg-white relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                    <ProductGrid title="New Arrivals" CarouselId="new-arrivals" />
                </section>

                <FeaturedCarousel />

                <ProductGrid
                    title="Under 999 Bestsellers"
                    products={under999Products}
                    CarouselId="under-999"
                />

                <div className="bg-[var(--bg-dark)] py-24 text-white">
                    <div className="container mx-auto px-6">
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
                    </div>
                </div>

                <ShopByCategories />

                <section className="py-20 bg-[var(--bg-primary)]">
                    <VideoShopping />
                </section>
            </div>
        </div>
    );
};

export default Home;
